<script setup>
import { onBeforeMount, ref } from "vue";
import axios from "axios";

const recent = ref([]);

onBeforeMount(async () => {
  try {
    const { data: fetched } = await axios.get("/data/blogs.json");
    const len = fetched.blogs.length;
    recent.value = fetched.blogs.slice(len - 3);
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <div class="blog-sidebar">
    <div class="search-bar-wrap d-flex">
      <input placeholder="search" type="search" />
      <i class="fal fa-search"></i>
    </div>
    <div class="blog-category">
      <h5>Categories</h5>
      <ul>
        <li>
          <i class="las la-angle-double-right"></i
          ><router-link to="/blogs">Inteior</router-link>
        </li>
        <li>
          <i class="las la-angle-double-right"></i
          ><router-link to="/blogs">Floor</router-link>
        </li>
        <li>
          <i class="las la-angle-double-right"></i
          ><router-link to="/blogs">Construction</router-link>
        </li>
        <li>
          <i class="las la-angle-double-right"></i
          ><router-link to="/blogs">Architecture</router-link>
        </li>
        <li>
          <i class="las la-angle-double-right"></i
          ><router-link to="/blogs">Sketch</router-link>
        </li>
      </ul>
    </div>
    <div class="recent-post-wrap">
      <h5>Recent Post</h5>
      <div v-for="r in recent.slice()" :key="r.id" class="single-recent-post">
        <div class="recent-post-thumbs">
          <img :alt="r.title" :src="r.img" />
        </div>
        <div class="recent-post-content">
          <p>{{ r.published }}</p>
          <router-link :to="{ name: 'blogDetails', params: { id: r.id } }"
            ><h6>{{ r.title }}</h6></router-link
          >
        </div>
      </div>
    </div>
    <div class="popular-tag-wrap">
      <h5>Popular Tag</h5>
      <span>Building</span>
      <span>Design</span>
      <span>Sketch</span>
      <span>Interior</span>
      <span>Architect</span>
    </div>
    <div class="question-wrap">
      <h5>Have Any Question?</h5>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        alteration in some form,
      </p>
      <div class="contact-info">
        <div class="contact-icon">
          <i class="las la-phone"></i>
        </div>
        <h4>(+62)81 122 4341</h4>
      </div>
      <div class="contact-info">
        <div class="contact-icon">
          <i class="las la-envelope"></i>
        </div>
        <h4>info@email.com</h4>
      </div>
    </div>
  </div>
</template>
