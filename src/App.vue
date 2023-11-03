<script setup>
import { RouterView } from "vue-router";
import {
  Preloader,
  MouseCursor,
  FooterArea,
  FooterBottom,
  OffCanvas,
  BackToTop,
} from "./components";
</script>

<template>
  <Preloader />
  <MouseCursor />
  <RouterView />
  <FooterArea />
  <FooterBottom />
  <OffCanvas />
  <BackToTop />
</template>
