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

  <div class="portfolio-area section-padding" id="port-masonry">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="portfolio-list">
            <router-link
              v-for="project in projects.slice(4, 10)"
              :key="project.id"
              class="single-portfolio-item"
              :to="{ name: 'portfolioDetails', params: { id: project.id } }"
            >
              <img :alt="project.name" :src="project.img" />
              <div class="portfolio-details">
                <span>{{ project.category }}</span>
                <h5>{{ project.name }}</h5>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
