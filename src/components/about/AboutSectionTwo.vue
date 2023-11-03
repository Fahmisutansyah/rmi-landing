<script setup>
import { onMounted } from "vue";
import CountUp from "vue-countup-v3";
</script>

<template>
  <div class="about-section section-padding">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-lg-6 col-md-12">
          <div class="about-content-wrap">
            <div class="section-title">
              <h6>About Us</h6>
              <h2>We Are Full Service Architecture Studio</h2>
            </div>
            <p>
              Nulla gravida dignissim magna, lacinia suscipit diam. Ut ut
              viverra velit. Aenean et felis arcu. Aliquam vitae justo erat.
              Integer sed lacus in tellus finibus gravida. Integer scelerisque
              pretium mauris nec consequat. Sed condimentum pellentesque lorem.
              Phasellus imperdiet mi ultrices, tristique est vitae
            </p>
            <router-link class="theme-btn" :to="{ name: 'about' }"
              >Learn More</router-link
            >
            <div class="row counter-wrapper-two">
              <div class="col-xl-4 col-lg-4 col-md-4">
                <div class="single-counter-box">
                  <p class="counter-number">
                    <CountUp
                      :end-val="310"
                      :autoplay="false"
                      :duration="1"
                      :options="{
                        enableScrollSpy: true,
                        scrollSpyDelay: 100,
                        scrollSpyOnce: true,
                      }"
                    ></CountUp>
                  </p>
                  <h6>Project Completed</h6>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4">
                <div class="single-counter-box">
                  <p class="counter-number">
                    <CountUp
                      :end-val="156"
                      :autoplay="false"
                      :duration="1"
                      :options="{
                        enableScrollSpy: true,
                        scrollSpyDelay: 100,
                        scrollSpyOnce: true,
                      }"
                    ></CountUp>
                  </p>
                  <h6>Satified Clients</h6>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4">
                <div class="single-counter-box">
                  <p class="counter-number">
                    <CountUp
                      :end-val="75"
                      :autoplay="false"
                      :duration="1"
                      :options="{
                        enableScrollSpy: true,
                        scrollSpyDelay: 100,
                        scrollSpyOnce: true,
                      }"
                    ></CountUp>
                  </p>
                  <h6>Awards Win</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="about-bg-wrapper">
            <img alt="" src="/assets/img/about/about-bg-2.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
