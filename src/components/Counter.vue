<script setup>
import { onBeforeMount, ref } from "vue";
import CountUp from "vue-countup-v3";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();

const counts = ref([]);

onBeforeMount(async () => {
  try {
    const { data: fetchedcounts } = await axios.get("/data/counts.json");
    counts.value = fetchedcounts.counts;
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <div
    class="counter-section section-padding"
    :class="route.name === 'home' ? 'pt-0 pb-30' : 'dark-bg pb-60'"
  >
    <div class="container">
      <div class="row" v-if="counts.length > 0">
        <div
          v-for="count in counts"
          :key="counts.id"
          class="col-lg-3 col-md-6 col-sm-6"
        >
          <div class="single-counter-box">
            <p class="counter-number">
              <CountUp
                :class="{ 'text-white': route.name !== 'home' }"
                :end-val="count.number"
                :autoplay="false"
                :duration="1"
                :options="{
                  enableScrollSpy: true,
                  scrollSpyDelay: 100,
                  scrollSpyOnce: true,
                }"
              >
              </CountUp
              >{{ count.suffix }}
            </p>
            <h6 :class="{ 'text-white': route.name !== 'home' }">
              {{ count.project }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
