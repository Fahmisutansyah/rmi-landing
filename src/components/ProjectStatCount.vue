<script setup>
import { onBeforeMount, ref } from "vue";
import CountUp from "vue-countup-v3";
import axios from "axios";

const stat = ref([]);

onBeforeMount(async () => {
  try {
    const { data: fetched } = await axios.get("/data/projects/stat.json");
    stat.value = fetched.stat;
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <div class="counter-section section-padding pt-60 pb-30">
    <div class="container">
      <div class="row gx-5">
        <div v-for="s in stat" :key="s.id" class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-counter-box">
            <p class="counter-number stat">
              <CountUp
                :end-val="s.number"
                :autoplay="false"
                :duration="1"
                :options="{
                  enableScrollSpy: true,
                  scrollSpyDelay: 100,
                  scrollSpyOnce: true,
                }"
              ></CountUp>
              {{ s.suffix }}
            </p>
            <h6>{{ s.status }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
