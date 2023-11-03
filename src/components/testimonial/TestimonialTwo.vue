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
  <div class="testimonial-section testimonial-two section-padding">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-5">
          <div class="section-title">
            <h6>Testimonial</h6>
            <h2>Client's say about our work.</h2>
          </div>
        </div>
        <div class="col-xl-7 col-lg-7">
          <div class="testimonial-wrapper owl-carousel">
            <div
              v-for="(ts, i) in testimonials.slice(0, 2)"
              :key="ts.id"
              class="single-testimonial-item"
            >
              <div class="quote-icon">
                <img
                  :src="`assets/img/straight-quotes${i === 0 ? '-2' : ''}.png`"
                  alt=""
                />
              </div>
              <div class="testimonial-content">
                <p>
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
