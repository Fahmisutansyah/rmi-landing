<script setup>
import { onBeforeMount, ref } from "vue";
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
</script>
<template>
  <Header />
  <Breadcrumb />

  <div class="portfolio-section section-padding">
    <div class="container">
      <div class="row">
        <div
          v-for="(project, i) in projects.slice(4, 10)"
          :key="project.id"
          class="col-xl-4 d-flex justify-content-center"
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
