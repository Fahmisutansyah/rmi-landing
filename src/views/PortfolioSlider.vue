<script setup>
import { onBeforeMount, onUpdated, ref } from "vue";
import { Header, Breadcrumb } from "../components";
import axios from "axios";

const projects = ref([]);

onBeforeMount(async () => {
  try {
    const { data: fetchedProjects } = await axios.get("/data/projects.json");
    projects.value = fetchedProjects.projects;
  } catch (error) {
    console.log(error);
  }
});

onUpdated(() => {
  if (projects.value.length > 0) {
    $(".portfolio-slider").owlCarousel({
      items: 1,
      margin: 30,
      dots: true,
      nav: false,
      loop: true,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        575: {
          items: 1,
          nav: false,
          dots: false,
        },

        767: {
          items: 2,
          nav: false,
          dots: false,
        },

        990: {
          items: 2,
          loop: true,
        },
        1200: {
          items: 2,
          dots: true,
          loop: true,
        },
      },
    });
  }
});
</script>
<template>
  <Header />
  <Breadcrumb />

  <div class="portfolio-section section-padding">
    <div class="container">
      <div class="row">
        <div class="portfolio-slider owl-carousel">
          <div
            v-for="project in projects.slice(4, 10)"
            :key="project.id"
            class="single-portfolio-wrapper"
          >
            <div class="portfolio-img">
              <img :alt="project.name" :src="project.img" />
            </div>
            <div class="portfolio-title">
              <h3>{{ project.name }}</h3>
              <h6>{{ project.category }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
