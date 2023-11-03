<template>
  <div
    class="cta-area d-flex align-items-center bg-cover"
    data-background="/assets/img/cta-bg.jpg"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 text-center">
          <div class="section-title">
            <h2 class="text-white">
              Let's start your new <br />
              dream project
            </h2>
          </div>
          <router-link class="theme-btn" :to="{ name: 'contact' }"
            >Contact Us</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
