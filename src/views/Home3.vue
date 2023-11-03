<script setup>
import { onMounted } from "vue";
import {
  Header,
  HeroAreaThree,
  ServiceThree,
  Counter,
  AboutSectionThree,
  ProjectTwo,
  Clients,
  TestimonialThree,
  BlogOne,
} from "../components";

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
  <HeroAreaThree />
  <ServiceThree :type="true" />
  <Counter />
  <AboutSectionThree />
  <ProjectTwo />
  <Clients />
  <TestimonialThree />
  <BlogOne />
</template>
