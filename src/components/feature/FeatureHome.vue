<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // Feature Slider

  $(".feature_item").slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  });
});
</script>
<template>
  <div class="feature_wrap">
    <div class="feature_item" data-background="/assets/img/feature-bg.jpg">
      <h5>Construction Project</h5>
      <h5>Interior Design</h5>
      <h5>Concept Drawings</h5>
      <h5>Building Venture</h5>
    </div>
  </div>
</template>
