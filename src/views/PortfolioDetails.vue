<script setup>
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import { Header, ProjectStatCount } from "../components";
import axios from "axios";

const route = useRoute();

const project = ref({});

onBeforeMount(async () => {
  try {
    const { data: fetchedProjects } = await axios.get("/data/projects/id.json");
    project.value = fetchedProjects.projectId;
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <Header />
  <div class="single-project-section section-padding pb-60">
    <div class="container">
      <div class="row pb-60">
        <div class="col-xl-6 col-lg-6">
          <div class="section-title">
            <h1>Portfolio Details</h1>
            <h6>
              <router-link :to="{ name: 'home' }">Home /</router-link> Project /
              Project Details
            </h6>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="project-details-wrapper">
          <div class="project-feature-img">
            <img alt="project feature" :src="project.featureImg" />
          </div>
          <div class="row mt-60">
            <div class="col-md-9">
              <div class="project-details">
                <h2>Cubic Home</h2>
                <p>
                  Lorem ipsum dolors sit amet, cons the ctetu isci elit sed do
                  eiusmod eterorew llum ididuntt ut ores et oremis ipsum dolors
                  sit amet, cons ectetur adipisci elit, sed do eiusmod tempor
                  incp tate velit ese. Ultrices vitae nus auctor eu augue ut
                  lectus arcu. Eu non diam phasellus vest ibulum lorem sed risus
                  ultricies. Sed vulputate mi sit amet mauris commodo quis. Vulp
                  utate odio ut enim blandit volutpat maecenas volutpat blandit.
                  Penatibus et magnis dis parturient montes. Aliquam ut
                  porttitor leo a diam. Lobortis scelerisque fermentum dui.
                </p>
                <br />
                <p>
                  Aliquam ut porttitor leo a diam. Lobortis scelerisque
                  fermentum dui faucibus in ornare neque aliquam vestibulum. Sed
                  enim ut sem viverra aliquet eget sit amet. Enim blandit
                  volutpat maecenas volutpat blandit aliquam. Sed enim ut sem
                  viverra aliquet eget sit amet. Enim blandit volutpat maecenas
                  volutpat blandit aliquam.
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="project-info-wrap">
                <div class="project-info">
                  <h6>Year:</h6>
                  <p>{{ project.year }}</p>
                </div>
                <div class="project-info">
                  <h6>Client:</h6>
                  <p>{{ project.client }}</p>
                </div>
                <div class="project-info">
                  <h6>Architect:</h6>
                  <p>{{ project.architect }}</p>
                </div>
                <div class="project-info">
                  <h6>Location:</h6>
                  <p>{{ project.location }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="project-details-img">
            <div class="row mt-30">
              <div class="col-md-6">
                <img alt="project details 1" :src="project.galleryImg1" />
              </div>
              <div class="col-md-6">
                <img alt="project details 2" :src="project.galleryImg2" />
              </div>
            </div>
          </div>

          <ProjectStatCount />

          <h3>Design Concept</h3>
          <p>
            Phasellus scelerisque sapien vitae tellus sodales dapibus. Fusce et
            ultricies arcu, non viverra turpis. Aliquam dignissim lacus non
            turpis posuere fringilla. Cras volutpat, elit vel bibendum
            convallis, sem justo fringilla ipsum, et aliquet elit odio non
            purus. Vestibulum fringilla erat ac laoreet convallis. Suspendisse
            potenti. Sed ligula nisi, iaculis vitae rhoncus nec, scelerisque non
            felis.
          </p>
          <br />
          <p>
            Quisque ac scelerisque velit. Suspendisse at libero venenatis,
            lacinia eros quis, fringilla justo. Suspendisse potenti. Aenean eget
            ipsum dapibus, tempus odio id, sollicitudin risus. Phasellus
            volutpat mi vel sapien tincidunt gravida. Sed vel egestas ipsum.
            Proin eleifend libero facilisis libero malesuada, vitae venenatis mi
            fringilla.
          </p>
          <h3>Conclusion</h3>
          <p>
            Maecenas elementum sem eu purus pulvinar, eget luctus metus
            fringilla. Donec gravida mollis arcu, ut placerat ex. Nunc purus
            odio, porta ac imperdiet sit amet, feugiat nec mauris. Ut malesuada
            orci mattis tempor ultrices. Phasellus pulvinar arcu leo, id finibus
            diam bibendum ac. Suspendisse potenti. Fusce vestibulum vel leo et
            volutpat. Etiam vel porta nulla. Morbi arcu urna, consequat id
            suscipit non, posuere nec nisi. Proin feugiat rutrum dignissim.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
