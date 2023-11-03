<script setup>
import { onBeforeMount, ref, onMounted } from "vue";
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

onMounted(() => {
  //Isotope Filter

  $(".port-menu li").on("click", function () {
    var selector = $(this).attr("data-filter");

    $(".port-menu li").removeClass("active");

    $(this).addClass("active");

    $(".portfolio-list").isotope({
      filter: selector,
      percentPosition: true,
    });
  });
});
</script>
<template>
  <div class="portfolio-area section-padding" id="port-masonry">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="section-title">
            <h6>Portfolio</h6>
            <h2>Check some of our agency newest projects.</h2>
          </div>
        </div>
        <div
          class="col-xl-6 col-lg-6 d-flex align-items-end justify-content-end"
        >
          <ul class="port-menu">
            <li data-filter="*" class="active">All</li>
            <li data-filter=".building">Building</li>
            <li data-filter=".interior">Interior</li>
            <li data-filter=".construction">Construction</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="portfolio-list">
            <router-link
              v-for="(project, i) in projects.slice(4, 10)"
              :key="project.id"
              :class="['single-portfolio-item', project.tags]"
              :to="{ name: 'portfolioDetails', params: { id: project.id } }"
            >
              <img :alt="project.name" :src="project.img" />
              <div class="portfolio-details">
                <span>{{ project.name }}</span>
                <h5>{{ project.category }}</h5>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
