<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { Header, Breadcrumb, Map, ContactForm, CTA } from "../components";
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
    <Breadcrumb />

    <!-- Contact Section  -->
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
    <!-- Contact Info -->
    <div class="contact-info-wrap section-padding pt-0 pb-120">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-6 col-12">
            <div class="single-contact-info">
              <div class="contact-icon">
                <img alt="" src="/assets/img/contact/1.png" />
              </div>
              <p>
                {{ contact.house }},{{ contact.street }}, {{ contact.city }}-
                {{ contact.zip_code }}, {{ contact.country }}.
              </p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 col-12">
            <div class="single-contact-info">
              <div class="contact-icon">
                <img alt="" src="/assets/img/contact/2.png" />
              </div>
              <p>{{ contact.mailOne }}</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 col-12">
            <div class="single-contact-info">
              <div class="contact-icon">
                <img alt="" src="/assets/img/contact/3.png" />
              </div>
              <p>{{ contact.mbl_one }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
