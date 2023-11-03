<script setup>
import { onBeforeMount, ref, onUpdated } from "vue";
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
    $(".project-slider").owlCarousel({
      items: 1,
      dots: false,
      nav: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 3000,
      slideSpeed: 300,
      margin: 30,
      navText: [
        "<i class='las la-arrow-left'></i>",
        "<i class='las la-arrow-right'></i>",
      ],
    });
    // data-backround
    $("[data-background").each(function () {
      $(this).css(
        "background-image",
        "url( " + $(this).attr("data-background") + "  )"
      );
    });
  }
});
</script>
<template>
  <div class="project-section section-padding pb-90">
    <div class="container">
      <div class="row">
        <div class="col-xl-7 col-lg-7">
          <div class="section-title">
            <h2>
              Delivering our clients more project clarity, greater insight, and
              less chaos.
            </h2>
          </div>
        </div>
      </div>
      <div class="project-slider owl-carousel">
        <div class="row mt-60">
          <div
            v-for="(project, i) in projects.slice(0, 2)"
            :key="project.id"
            class="wow fadeInLeft animated"
            :class="
              i === 0
                ? 'col-xl-8 col-lg-7 col-md-6'
                : 'col-xl-4 col-lg-5 col-md-6'
            "
            :data-wow-delay="`${(i + 1) * 200}ms`"
          >
            <router-link
              class="single-project-wrapper"
              :data-background="project.img"
              :to="{ name: 'portfolioDetails', params: { id: project.id } }"
            >
              <div class="project-info-inner">
                <h3>{{ project.name }}</h3>
                <h6>
                  Location: <span>{{ project.location }}</span>
                </h6>
              </div>
            </router-link>
          </div>
        </div>
        <div class="row mt-60">
          <div
            v-for="(project, i) in projects.slice(2, 4)"
            :key="project.id"
            class="wow fadeInLeft animated"
            :class="
              i === 0
                ? 'col-xl-8 col-lg-7 col-md-6'
                : 'col-xl-4 col-lg-5 col-md-6'
            "
            :data-wow-delay="`${(i + 1) * 200}ms`"
          >
            <router-link
              class="single-project-wrapper"
              :data-background="project.img"
              :to="{ name: 'portfolioDetails', params: { id: project.id } }"
            >
              <div class="project-info-inner">
                <h3>{{ project.name }}</h3>
                <h6>
                  Location: <span>{{ project.location }}</span>
                </h6>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="explore-btn">
      <router-link to="/portfolio-standard"
        >View All Projects<i class="las la-arrow-right"></i
      ></router-link>
    </div>
  </div>
</template>
