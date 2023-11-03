<script setup>
import { onMounted, onBeforeMount, ref } from "vue";
import {
  Header,
  HeroArea,
  ProjectTwo,
  AboutSection,
  Counter,
  Team,
  Clients,
  ContactForm,
  Map
  // ContactSection,
  // Testimonial,
} from "../components";
import axios from "axios";

const contact = ref({});

onBeforeMount(async () => {
  try {
    const { data: fetched } = await axios.get("/data/contact.json");
    contact.value = fetched.contact;
  } catch (error) {
    console.log(error);
  }
});
onMounted(() => {
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });
});
</script>
<template>
  <div>
    <Header />
    <HeroArea />
    <ProjectTwo />
    <AboutSection />
    <Counter />
    <Team />
    <Clients />
    <div class="contact-page section-padding">
      <div class="container">
        <div class="row gx-5">
          <div class="col-xl-6 col-lg-6 col-12">
            <Map :location="contact.location" />
          </div>
          <div class="col-xl-6 col-lg-6 col-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
</div>
  
  <!-- <Testimonial /> -->
  <!-- <ContactSection /> -->
</template>
