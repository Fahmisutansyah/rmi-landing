<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { Header, BreadcrumbTwo } from "../components";

const team = ref([]);

onMounted(async () => {
  const { data: fetchedTeam } = await axios.get("/data/team.json");
  team.value = fetchedTeam.team;
});
</script>
<template>
  <div>
    <Header />
    <div class="team-section section-padding pb-60">
      <div class="container">
        <BreadcrumbTwo />
        <div class="row">
          <div v-for="t in team" :key="t.id" class="col-xl-3 col-lg-3 col-md-6">
            <div class="single-team-item">
              <div class="team-img">
                <img :alt="t.name" :src="t.img" />
              </div>
              <div class="team-info">
                <h5>{{ t.name }}</h5>
                <p>{{ t.designation }}</p>
              </div>
              <div class="social-icon">
                <a :href="t.social.fb"><i class="lab la-facebook-f"></i></a>
                <a :href="t.social.tw"><i class="lab la-twitter"></i></a>
                <a :href="t.social.ln"><i class="lab la-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
