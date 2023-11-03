<script setup>
import { onBeforeMount, onUpdated, ref } from "vue";
import axios from "axios";

const testimonials = ref([]);

onBeforeMount(async () => {
  try {
    const { data: fetched } = await axios.get("/data/testimonials.json");
    testimonials.value = fetched.testimonials;
  } catch (error) {
    console.log(error);
  }
});

onUpdated(() => {
  if (testimonials.value.length > 0) {
    $(".testimonial-carousel").owlCarousel({
      items: 1,
      margin: 30,
      dots: true,
      nav: false,
      loop: true,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        575: {
          items: 1,
          nav: false,
          dots: false,
        },

        767: {
          items: 2,
          nav: false,
          dots: false,
        },

        990: {
          items: 2,
          loop: true,
        },
        1200: {
          items: 3,
          dots: true,
          loop: true,
        },
      },
    });
  }
});
</script>
<template>
  <div class="testimonial-section dark-bg section-padding" id="testimonial-3">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="testimonial-carousel owl-carousel">
            <div
              v-for="(ts, i) in testimonials.slice(2)"
              :key="ts.id"
              class="single-testimonial-item"
            >
              <div class="testimonial-rating">
                <i
                  v-for="index in ts.rating"
                  :key="index"
                  class="las la-star"
                ></i>
              </div>
              <div class="testimonial-content">
                <p>“{{ ts.comment }}”</p>
              </div>
              <div class="testimonial-author">
                <div class="testimonial-thumb">
                  <img :alt="ts.name" :src="ts.img" />
                </div>
                <div class="testimonial-title">
                  <h5>{{ ts.name }}</h5>
                  <p>{{ ts.rank }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
