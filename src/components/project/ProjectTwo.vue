<script setup>
import { onBeforeMount, onUpdated, ref } from "vue";
import axios from "axios";

const works = ref([]);

onBeforeMount(async () => {
  try {
    const { data: fetched } = await axios.get("/data/recent-works.json");
    works.value = fetched.works;
  } catch (error) {
    console.log(error);
  }
});

onUpdated(() => {
  if (works.value.length > 0) {
    $(".project-slider-two").owlCarousel({
      items: 1,
      dots: false,
      nav: true,
      loop: true,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      slideSpeed: 600,
      // navText: [
      //   "<i class='las la-arrow-left'></i>",
      //   "<i class='las la-arrow-right'></i>",
      // ],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false,
        },
        600: {
          items: 1,
          nav: false,
          dots: false,
        },
        768: {
          items: 1,
        },
        1100: {
          items: 1,
        },
      },
    });
  }
});
</script>
<template>
  <div class="project-area section-padding pt-0 pb-0 mt-5">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-xl-8 text-center">
          <div class="section-title">
            <h6>Products</h6>
            <h2>What we provide</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="project-slider-two owl-carousel">
      <!-- <div class="row gx-0">
        <div
          v-for="(w, i) in works"
          :key="w.id"
          class="col-xl-3 col-lg-3 col-md-6"
        >
          <div
            class="single-project-item bg-cover"
            :class="i === 0 ? 'project-bg' : `project-bg-${i + 1}`"
          >
            <div class="project-inner">
              <router-link
                class="project-icon"
                :to="{ name: 'portfolioDetails', params: { id: w.id } }"
              >
                <i class="las la-plus"></i>
              </router-link>
              <div class="hover-info">
                <h4>
                  {{ w.title }}<span>{{ w.tag }}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="row">
        <div
          v-for="(w, i) in works"
          :key="w.id"
          class="col-xl-4 col-lg-4"
        >
          <div
            class="single-project-item bg-cover"
            :class="i === 0 ? 'project-bg' : `project-bg-${i + 1}`"
          >
            <div class="project-inner">
              <!-- <router-link
                class="project-icon"
                :to="{ name: 'portfolioDetails', params: { id: w.id } }"
              >
                <i class="las la-plus"></i>
              </router-link> -->
              <div class="hover-info">
                <h4>
                  {{ w.title }}<span>{{ w.tag }}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
