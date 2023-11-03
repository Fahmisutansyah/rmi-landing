<script setup>
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();

const { type } = defineProps(["type"]);

const projects = ref([]);

onBeforeMount(async () => {
  try {
    const { data: fetchedProjects } = await axios.get("/data/projects.json");
    projects.value = fetchedProjects.projects;
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <div class="portfolio-section section-padding">
    <div class="container">
      <div class="row">
        <div
          v-for="project in type ? projects.slice(4) : projects.slice(6)"
          :key="project.id"
          class="col-md-6"
          :class="
            route.name === 'portfolioLayout2'
              ? 'col-xl-6 col-lg-6'
              : route.name === 'portfolioLayout3'
              ? 'col-xl-4 col-lg-4'
              : 'col-xl-3 col-lg-3'
          "
        >
          <div class="single-portfolio-wrapper">
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
