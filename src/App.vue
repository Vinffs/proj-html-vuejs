<template>
  <HeaderComponent />
  <main>
    <IntroductionComponent />
    <ServicesComponent />
    <AboutWorkComponent />
    <PlansComponent />
    <NewsComponent />
    <ReviewsComponent />
    <ConsultationComponent />
    <button @click="scrollToTop" v-show="scroll"><i class="fa-solid fa-chevron-up"></i></button>
  </main>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import IntroductionComponent from "./components/MainComponents/IntroductionComponent.vue";
import ServicesComponent from "./components/MainComponents/ServicesComponent.vue";
import AboutWorkComponent from "./components/MainComponents/AboutWorkComponent.vue";
import PlansComponent from "./components/MainComponents/PlansComponent.vue";
import NewsComponent from "./components/MainComponents/NewsComponent.vue";
import ReviewsComponent from "./components/MainComponents/ReviewsComponent.vue";
import ConsultationComponent from "./components/MainComponents/ConsultationComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: 'App',
  components: {
    HeaderComponent,
    IntroductionComponent,
    ServicesComponent,
    AboutWorkComponent,
    PlansComponent,
    NewsComponent,
    ReviewsComponent,
    ConsultationComponent,
    FooterComponent,
  },
  data() {
    return {
      scroll: false,
      scrollThreshold: 100,

    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    isScrolled() {
      this.scroll = false;
      if (window.scrollY > this.scrollThreshold) {
        this.scroll = true;
      } else if (window.scrollY < this.scrollThreshold) {
        this.scroll = false;
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.isScrolled);
  }
}
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/variables" as *;

button {
  position: fixed;
  bottom: 0;
  right: 5%;
  background-color: $color_light_grey;
  border: 0;
  color: $color_terciary;
  padding: 0.4em 1em;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>