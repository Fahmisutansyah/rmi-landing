<script setup>
import { onMounted } from "vue";
import { Header, Breadcrumb, FaqSection } from "../components";

onMounted(() => {
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });
});
</script>
<template>
  <Header />
  <Breadcrumb />
  <FaqSection />
</template>
