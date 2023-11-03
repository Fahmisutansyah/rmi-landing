<script setup>
import { onMounted } from "vue";

onMounted(() => {
  function handlePreloader() {
    if ($(".preloader").length) {
      $(".preloader").delay(200).fadeOut(500);
    }
  }

  $(window).on("load", function () {
    handlePreloader();
  });
});
</script>
<template>
  <div class="preloader">
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  </div>
</template>
