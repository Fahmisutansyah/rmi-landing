<script setup>
import { onMounted } from "vue";

onMounted(() => {
  //Progress Bar JS

  $("#bar1").barfiller({
    barColor: "#171717",
    duration: 5000,
  });

  $("#bar2").barfiller({
    barColor: "#171717",
    duration: 5000,
  });

  $("#bar3").barfiller({
    barColor: "#171717",
    duration: 5000,
  });

  $("#bar4").barfiller({
    barColor: "#171717",
    duration: 5000,
  });
});
</script>
<template>
  <div class="about-section section-padding">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="about-img-wrapper">
            <img alt="about" src="/assets/img/about/about-bg-3.jpg" />
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="about-content-wrapper">
            <div class="section-title">
              <h6>About Company</h6>
              <h2>
                Watch the creative process behind our <b>interior</b> project.
              </h2>
            </div>
            <p>
              We craft premium digital work for web, mobile and experiential
              with creative agencies and global brands alike – putting passion
            </p>
            <div class="progress-bar-area">
              <div class="single-bar-item">
                <h5>Renovation</h5>
                <div class="bar-parcentage">90%</div>
              </div>
              <div class="barfiller" id="bar1">
                <span class="fill" data-percentage="90"></span>
              </div>
              <div class="single-bar-item">
                <h5>Project Analysis</h5>
                <div class="bar-parcentage">70%</div>
              </div>
              <div class="barfiller" id="bar2">
                <span class="fill" data-percentage="70"></span>
              </div>
              <div class="single-bar-item">
                <h5>Construction</h5>
                <div class="bar-parcentage">80%</div>
              </div>
              <div class="barfiller" id="bar3">
                <span class="fill" data-percentage="80"></span>
              </div>
              <div class="single-bar-item">
                <h5>Site Planning</h5>
                <div class="bar-parcentage">60%</div>
              </div>
              <div class="barfiller" id="bar4">
                <span class="fill" data-percentage="60"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
