<script setup>
import { onMounted } from "vue";
import {
  Header,
  HeroAreaTwo,
  AboutSectionTwo,
  ServiceTwo,
  PortfolioTwo,
  TestimonialTwo,
  Team,
  CTA,
  BlogTwo,
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
  <HeroAreaTwo />
  <AboutSectionTwo />
  <ServiceTwo />
  <PortfolioTwo />
  <Team />
  <TestimonialTwo />
  <CTA />
  <BlogTwo :type="false" />
</template>
