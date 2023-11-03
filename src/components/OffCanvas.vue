<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // Offcanvas menu
  $(".menu-close,.offcanvas-overly").on("click", function () {
    $(".extra-info,.offcanvas-overly").removeClass("active");
  });
});
</script>
<template>
  <div class="extra-info">
    <div class="close-icon menu-close">
      <button>
        <i class="las la-times"></i>
      </button>
    </div>
    <div class="logo-side mb-30">
      <div class="logo">
        <router-link :to="{ name: 'home' }" class="logo">Raw Material Indonesia</router-link>
      </div>
    </div>
    <div class="side-info">
      <div class="contact-list mb-40">
        <!-- <h4>About</h4> -->
        <p>
          We would like to know your needs.
        </p>
        <img src="/assets/img/about/about-logo-white.png" alt="" />

        <div class="mt-30 mb-30">
          <router-link :to="{ name: 'contact' }" class="bordered-btn"
            >Get In Touch</router-link
          >
        </div>
      </div>
      <div class="social-area-wrap">
                   <a href="https://api.whatsapp.com/send?phone=6281285959576&text=Hello+RMI%21+I+have+questions+about+your+services." target="_blank"><i class="lab la-whatsapp"></i></a>
                  <a href="https://www.linkedin.com/company/rawmaterialid/" target="_blank"><i class="lab la-linkedin"></i></a>
                  <a href="https://www.instagram.com/rawmaterialid/" target="_blank"><i class="lab la-instagram"></i></a>
      </div>
    </div>
  </div>

  <div class="offcanvas-overly"></div>
</template>
