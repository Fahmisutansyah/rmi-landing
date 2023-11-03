<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
onMounted(() => {
  // Metis Menu
  $("#mobile-menu").metisMenu();

  $("#hamburger").on("click", function () {
    $(".mobile-nav").addClass("show");
    $(".overlay").addClass("active");
  });

  $(".close-nav").on("click", function () {
    $(".mobile-nav").removeClass("show");
    $(".overlay").removeClass("active");
  });

  $(".overlay").on("click", function () {
    $(".mobile-nav").removeClass("show");
    $(".overlay").removeClass("active");
  });
});
</script>
<template>
  <div class="mobile-nav-bar d-block col-sm-1 col-6 d-lg-none">
    <div class="mobile-nav-wrap">
      <div id="hamburger">
        <i class="las la-bars"></i>
      </div>
      <!-- mobile menu - responsive menu  -->
      <div class="mobile-nav">
        <button type="button" class="close-nav">
          <i class="las la-times-circle"></i>
        </button>
        <div class="action-bar">
          <a href="mailto:rawmaterial.id@gmail.com"
            ><i class="las la-envelope"></i>rawmaterial.id@gmail.com</a
          >
          <a href="tel:6281285959576"
            ><i class="fal fa-phone"></i>+62-812-8595-9576</a
          >
          <router-link :to="{ name: 'contact' }" class="theme-btn bordered-btn"
            >Contact Us</router-link
          >
        </div>
      </div>
    </div>
    <div :class="route.name === 'home3' ? 'overlay-two' : 'overlay'"></div>
  </div>
</template>
