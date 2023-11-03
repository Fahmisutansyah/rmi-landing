<script setup>
import { onBeforeMount, onUpdated, ref } from "vue";
import axios from "axios";

const clients = ref([]);

onBeforeMount(async () => {
  try {
    const { data: fetched } = await axios.get("/data/clients.json");
    clients.value = fetched.clients;
  } catch (error) {
    console.log(error);
  }
});

onUpdated(() => {
  if (clients.value.length > 0) {
    $(".client-wrap").owlCarousel({
      loop: true,
      items: 5,
      dots: true,
      nav: false,
      smartSpeed: 500,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false,
        },
        600: {
          items: 2,
          nav: false,
          dots: false,
        },
        768: {
          items: 3,
          nav: false,
          dots: false,
        },
        1100: {
          items: 4,
          nav: false,
          dots: true,
        },
      },
    });
  }
});
</script>
<template>
  <div class="client-area section-padding">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12">
          <div class="client-wrap owl-carousel">
            <div v-for="c in clients" class="single-client">
              <a :href="c.link"><img alt="" :src="c.img" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
