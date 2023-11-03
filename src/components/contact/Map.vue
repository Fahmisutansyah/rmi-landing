<script setup>
const { location } = defineProps(["location"]);
</script>

<template>
  <div class="contact-page google-map">
    <iframe
      allowfullscreen="false"
      height="600"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      :src="location"
      style="border: 0"
      width="600"
    ></iframe>
  </div>
</template>
