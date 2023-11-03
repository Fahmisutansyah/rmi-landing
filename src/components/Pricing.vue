<script setup>
import { onBeforeMount, ref } from "vue";
import axios from "axios";

const plans = ref([]);

onBeforeMount(async () => {
  try {
    const { data: fetched } = await axios.get("/data/plans.json");
    plans.value = fetched.plans;
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <div class="pricing-section section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h6>Pricing</h6>
            <h2>Choose Your Package</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(p, i) in plans" :key="p.id" class="col-lg-4 col-md-6">
          <div
            class="single-price-item wow fadeInLeft"
            :class="{ active: i === 1 }"
            :data-wow-delay="`${(i + 3) * 0.1}s`"
          >
            <h5>{{ p.plan }}</h5>
            <div class="price-box">
              <h3>
                ${{ p.value }} / <span>{{ p.per }}</span>
              </h3>
              <p>Perfect for {{ p.recommendation }}</p>
            </div>
            <div class="price-list">
              <ul>
                <li v-for="fr in p.feature">{{ fr }}</li>
              </ul>
            </div>
            <div class="bordered-btn">Choose Plan</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
