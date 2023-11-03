<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const page = route.name;
</script>
<template>
  <div class="about-section section-padding">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-lg-6 col-md-7">
          <div v-if="page === 'about'" class="about-content-wrap">
            <div class="section-title">
              <h2>Discover Our Raw Goods Exellence</h2>
            </div>
            <p>
              Raw Material Indonesia (PT Raw Material Indonesia) is a growing trading company specializing
              in the sale of raw goods for various industries. We are proud to be a trusted supplier of high 
              quality commodities for domestic and international markets.
            </p>
            <p>
              With a strong commitment to excellence and customer satisfaction, we support a wide range of 
              industries such as manufacturing, agriculture and energy production.
            </p>
            <div class="signature-wrap mt-30">
              <img alt="" src="/assets/img/signature.png" />
            </div>
            <div class="about-author">
              <p>Rafi Belmiro, <span>CEO</span></p>
            </div>
          </div>
          <div v-else class="about-content-wrap">
            <div class="section-title">
              <!-- <h2>Sourcing Exellence In </h2> -->
              <h2>Discover Our Raw Goods Exellence</h2>
            </div>
            <p>
              Raw Material Indonesia (PT Raw Material Indonesia) is a growing trading
               company specializing in the sale of raw goods for various industries. 
               We are proud to be a trusted supplier of high quality commodities for domestic 
               and international markets.
            </p>
            <p>
              With a strong commitment to excellence and customer satisfaction, we support a wide range of 
              industries such as manufacturing, agriculture and energy production.
            </p>
            <div class="signature-wrap mt-30">
              <img alt="" id="signature" src="/assets/img/about/about-sign.png" />
            </div>
            <div class="about-author">
              <p>Rafi Belmiro, <span>CEO</span></p>
            </div>
            <!-- <router-link class="theme-btn" :to="{ name: 'about' }"
              >Learn More</router-link
            > -->
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-5">
          <div class="about-bg-wrapper">
            <img
              alt="our project design"
              :src="page !== 'about' ? '/assets/img/about/about-home.jpg': '/assets/img/about/about-logo.png' "
              style="max-height: 90vh"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#signature{
  width: 10rem;
}
</style>
