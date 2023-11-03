<script setup>
import { onBeforeMount, ref } from "vue";
import axios from "axios";

const faq = ref([]);

onBeforeMount(async () => {
  try {
    const { data: fetched } = await axios.get("/data/faq.json");
    faq.value = fetched.faq;
  } catch (error) {
    console.log(error);
  }
});

const count = (i) => {
  let k = i + 1;
  return k < 10 ? "0" + k : k;
};
</script>
<template>
  <div class="faq-section gray-bg section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-10 mb-50">
          <div class="cp-custom-accordion">
            <div class="accordions" id="accordionExample" v-if="faq.length > 0">
              <div
                v-for="(fq, idx) in faq"
                :key="fq.id"
                class="accordion-items"
              >
                <h2 class="accordion-header" :id="`heading${fq.id}`">
                  <button
                    :class="`accordion-buttons active ${
                      fq.id === '1' ? '' : 'collapsed'
                    }`"
                    :aria-controls="`collapse${fq.id}`"
                    aria-expanded="true"
                    :data-bs-target="`#collapse${fq.id}`"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    <span>{{ count(idx) }}</span
                    >{{ fq.question }}
                  </button>
                </h2>
                <div
                  :id="`collapse${fq.id}`"
                  :class="`accordion-collapse collapse ${
                    fq.id === '1' ? 'show' : ''
                  }`"
                  :aria-labelledby="`heading${fq.id}`"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">{{ fq.answer }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
