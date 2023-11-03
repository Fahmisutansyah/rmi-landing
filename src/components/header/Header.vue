<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import MoblieMenu from "./MoblieMenu.vue";

const route = useRoute();

onMounted(() => {
  $(".sub-menu ul li").on("click", function () {
    $(".sub-menu").removeAttr("style");
    $(this).addClass("active");
  });

  $("a.nav-link").on("mouseover", function () {
    $("a.nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $(".menu-trigger").on("click", function () {
    $(".extra-info,.offcanvas-overly").addClass("active");
    return false;
  });
});
</script>
<template>
  <div
    id="header-sticky"
    class="header-area"
    :class="route.name === 'home3' ? 'absolute-header' : ''"
  >
    <div class="navigation">
      <div class="container">
        <div class="header-inner-box">
          <router-link :to="{ name: 'home' }" class="logo"
            ><img :src="'assets/img/RAW_LOGO-01.png'" id="raw-logo"/></router-link
          >

          <!-- <div class="main-menu d-none d-lg-block">
            <ul>
              <li>
                <a href="#">Home <i class="las la-angle-down"></i></a>
                <ul class="sub-menu">
                  <li>
                    <router-link :to="{ name: 'home' }">Home - One</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'home2' }"
                      >Home - Two</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'home3' }"
                      >Home - Three</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Pages <i class="las la-angle-down"></i></a>
                <ul class="sub-menu">
                  <li>
                    <router-link :to="{ name: 'about' }">About</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'services' }"
                      >Services</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'team' }">Our Team</router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'price' }"
                      >Pricing Plans</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'faq' }">FAQ Page</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Portfolio <i class="las la-angle-down"></i></a>
                <ul class="sub-menu">
                  <li>
                    <router-link :to="{ name: 'portfolioStandard' }"
                      >Standard</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'portfolioGallery' }"
                      >Gallery</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ name: 'portfolioSlider' }"
                      >Slider</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <a href="#"
                      >List Layouts <i class="las la-arrow-right"></i>
                      <span class="sub-nav-toggler"></span>
                    </a>
                    <ul class="sub-menu-two">
                      <li>
                        <router-link :to="{ name: 'portfolioLayout2' }"
                          >Two Columns</router-link
                        >
                      </li>
                      <li>
                        <router-link :to="{ name: 'portfolioLayout3' }"
                          >Three Columns</router-link
                        >
                      </li>
                      <li>
                        <router-link :to="{ name: 'portfolioLayout4' }"
                          >Four Columns</router-link
                        >
                      </li>
                    </ul>
                  </li>

                  <li>
                    <router-link
                      :to="{ name: 'portfolioDetails', params: { id: '1' } }"
                      >Portfolio Details
                    </router-link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Blog <i class="las la-angle-down"></i></a>
                <ul class="sub-menu">
                  <li>
                    <router-link :to="{ name: 'blogs' }">Blogs</router-link>
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'blogDetails', params: { id: '1' } }"
                      >Blog Details</router-link
                    >
                  </li>
                </ul>
              </li>

              <li>
                <router-link :to="{ name: 'contact' }">Contact</router-link>
              </li>
            </ul>
          </div> -->

          <div class="header-btn">
            <div class="menu-trigger">
              <span class="lines"></span>
              <span class="lines"></span>
              <span class="lines"></span>
            </div>
          </div>

          <MoblieMenu />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#raw-logo{
  max-width: 20vh;
}
</style>
