<script setup>
import { onMounted } from "vue";
import {
  Header,
  Breadcrumb,
  ServiceThree,
  ServiceTwo,
  TestimonialTwo,
  ContactSection,
} from "../components";
import { Clients } from "../components";
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
  <ServiceThree :type="false" />
  <ServiceTwo />
  <TestimonialTwo />
  <ContactSection />
  <Clients />
</template>
