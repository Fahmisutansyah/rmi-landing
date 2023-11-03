<script setup>
import { onBeforeMount, ref } from "vue";
import { Header, Breadcrumb, BlogTwo } from "../components";
import axios from "axios";

const blogs = ref([]);

onBeforeMount(async () => {
  try {
    const { data: fetched } = await axios.get("/data/blogs.json");
    blogs.value = fetched.blogs;
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <Header />
  <Breadcrumb />
  <BlogTwo :type="true" />
</template>
