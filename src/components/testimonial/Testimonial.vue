<script setup>
import { onBeforeMount, onUpdated, ref } from "vue";
import axios from "axios";

const testimonials = ref([]);

onBeforeMount(async () => {
  try {
    const { data: fetchedTestimonials } = await axios.get(
      "/data/testimonials.json"
    );
    testimonials.value = fetchedTestimonials.testimonials;
  } catch (error) {
    console.log(error);
  }
});

onUpdated(() => {
  if (testimonials.value.length > 0) {
    // Testimonial Slider

    $(".testimonial-wrapper").owlCarousel({
      items: 1,
      dots: false,
      nav: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 3000,
      slideSpeed: 300,
      margin: 30,
      navText: [
        "<i class='las la-arrow-left'></i>",
        "<i class='las la-arrow-right'></i>",
      ],
    });
  }
});
</script>
<template>
  <div class="testimonial-section dark-bg section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8 col-lg-8 col-md-10">
          <div class="testimonial-wrapper owl-carousel">
            <div
              v-for="ts in testimonials.slice(0, 2)"
              :key="ts.id"
              class="single-testimonial-item"
            >
              <div class="quote-icon">
                <img alt="quote icon" src="/assets/img/straight-quotes.png" />
              </div>
              <div class="testimonial-content">
                <p class="text-white">
                  {{ ts.comment }}
                </p>
              </div>
              <div class="testimonial-author">
                <img :alt="ts.name" :src="ts.img" />
                <h6>
                  {{ ts.name }}<span>{{ ts.rank }}</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
