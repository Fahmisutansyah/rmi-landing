<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const team = ref([]);

onMounted(async () => {
  const { data: fetchedTeam } = await axios.get("/data/team.json");
  team.value = fetchedTeam.team;
});
</script>
<template>
  <div class="team-section gray-bg section-padding pb-60">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="section-title">
            <h6>Our Team</h6>
            <h2>
              Endeavor to meet your needs
            </h2>
          </div>
          <!-- <router-link class="theme-btn" to="/team">View More</router-link> -->
        </div>
        <!-- <div class="col-xl-6 col-lg-6">
          <div class="row" v-if="team.length > 0">
            <div
              v-for="t in team.slice(0, 2)"
              :key="t.id"
              class="col-xl-6 col-lg-6 col-md-6"
            >
              <div class="single-team-item">
                <template v-if="t.id > 0">
                  <div class="team-img">
                    <img :alt="t.name" :src="t.img" />
                  </div>
                  <div class="team-info">
                    <h5>{{ t.name }}</h5>
                    <p>{{ t.designation }}</p>
                  </div>
                  <div class="social-icon">
                    <a :href="t.social.ln"><i class="lab la-linkedin"></i></a>
                    <a :href="t.social.ln"><i class="lab la-whatsapp"></i></a>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <div class="row">
        <div
          v-for="t in team.slice(1, 6)"
          :key="t.id"
          class="col-xl-4 col-lg-4 col-md-6"
        >
          <div class="single-team-item">
            <div class="team-img justify-content-center row">
              <img :alt="t.name" :src="t.img" class="team"/>
            </div>
            <div class="team-info">
              <h5>{{ t.name }}</h5>
              <p>{{ t.designation }}</p>
            </div>
            <div class="social-icon">
              <a v-for="(value,key) in t.social" :key="key" :href="value" target="_blank"><i :class="`lab la-${key}`"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team{
  opacity: 0.85;
  height: 40vh;
  width: auto;
}
.team-img{
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 50%;
  overflow: hidden;
  // border-style: solid;
  // border-width: 3px;
  // border-color: #667631;
background: rgb(255,255,255);
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(245,245,243,1) 100%);
}
</style>
