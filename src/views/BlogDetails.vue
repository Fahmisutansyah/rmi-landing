<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import axios from "axios";
import { Header, BlogSidebar } from "../components";

const blog = ref({});

onBeforeMount(async () => {
  try {
    const { data: fetched } = await axios.get("/data/blogs/id.json");
    blog.value = fetched;
  } catch (error) {
    console.log(error);
  }
});

onMounted(() => {
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });
});
</script>
<template>
  <Header />
  <div class="breadcrumb=section section-padding pb-60">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 text-center">
          <div class="section-title">
            <h6>{{ blog.category }}</h6>
            <h2>{{ blog.title }}r</h2>
          </div>
          <div class="blog-meta-wrap">
            <div class="blog-meta">
              <p><i class="las la-calendar-alt"></i>{{ blog.published }}</p>
            </div>
            <div class="blog-meta">
              <p>
                <i class="las la-comments"></i
                >{{
                  blog.num_comments < 10
                    ? "0" + blog.num_comments
                    : blog.num_comments
                }}
                Comments
              </p>
            </div>
            <div class="blog-meta">
              <p><i class="las la-user-alt"></i>By {{ blog.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Blog Details Page  -->
  <div class="blog-details-page light-bg-1">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-8 col-12">
          <div class="blog-content-wrap">
            <div class="blog-feature-img" v-if="blog.images">
              <img alt="blog feature" :src="blog.images.detail_img_1" />
            </div>
            <p>
              {{ blog.full_description }}
            </p>
            <div class="blog-quote-wrap">
              <div class="quote-icon">
                <img alt="" src="/assets/img/straight-quotes-2.png" />
              </div>
              <div class="blog-quote-text" v-if="blog.quote">
                <p>{{ blog.quote.remark }}</p>
                <h6 class="blog-author">
                  {{ blog.quote.speaker }} /
                  <span>{{ blog.quote.designation }}</span>
                </h6>
              </div>
            </div>
            <h2>{{ blog.sub_heading_1 }}</h2>
            <p>
              {{ blog.sub_description_1 }}
            </p>
            <div class="blog-feature-img" v-if="blog.images">
              <img alt="blog feature" :src="blog.images.detail_img_2" />
            </div>
            <p>
              {{ blog.sub_description_2 }}
            </p>
            <div class="row border-top border-bottom pt-30 pb-30 mt-30 mb-30">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="blog-tag-wrap d-flex align-items-center">
                  <h5>Tags:</h5>
                  <span v-for="tag in blog.tags">{{ tag }}</span>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 text-xl-end">
                <div class="social-icon" v-if="blog.author_social">
                  <a :href="blog.author_social.fb"
                    ><i class="lab la-facebook-f"></i
                  ></a>
                  <a :href="blog.author_social.tw"
                    ><i class="lab la-twitter"></i
                  ></a>
                  <a :href="blog.author_social.ln"
                    ><i class="lab la-linkedin"></i
                  ></a>
                  <a :href="blog.author_social.ins"
                    ><i class="lab la-instagram"></i
                  ></a>
                </div>
              </div>
            </div>
            <div class="pagination-wrap">
              <a href="#"
                ><i class="las la-long-arrow-alt-left"></i>Previous Post</a
              >
              <a href="#"
                >Next Post<i class="las la-long-arrow-alt-right"></i
              ></a>
            </div>
          </div>
          <div class="commetns-section-wrap">
            <div class="comments-headline">
              <h3>Comments ({{ blog.num_comments }})</h3>
            </div>
            <div
              v-for="cm in blog.comments"
              :key="cm.id"
              class="single-comments-wrap"
            >
              <div class="single-comments-inner">
                <div class="comments-autor-thumb">
                  <img alt="commenter" :src="cm.avatar" />
                </div>
                <div class="comments-content">
                  <h6>{{ cm.name }}</h6>
                  <p class="comments-date"></p>
                  <p>
                    {{ cm.comment }}
                  </p>
                </div>
              </div>
              <a class="reply-btn" href="#">Reply</a>
            </div>
          </div>
          <div class="comments-form-wrap">
            <h3>Leave A Comment</h3>
            <div class="comments-form">
              <form action="#">
                <div class="row">
                  <div class="col-md-6 col-12">
                    <input placeholder="Name" type="text" />
                  </div>
                  <div class="col-md-6 col-12">
                    <input placeholder="Email" type="email" />
                  </div>
                  <div class="col-12">
                    <input placeholder="Phone" type="tel" />
                  </div>
                  <div class="col-12">
                    <textarea
                      cols="30"
                      id="message"
                      name="message"
                      placeholder="Write a Comment"
                      rows="10"
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <input type="submit" value="Post Comment" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-12">
          <BlogSidebar />
        </div>
      </div>
    </div>
  </div>
</template>
