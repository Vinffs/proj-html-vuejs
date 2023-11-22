<template>
  <HeaderComponent />
  <main>
    <IntroductionComponent />
    <ServicesComponent />
    <AboutWorkComponent />
    <PlansComponent />
    <NewsComponent />
  </main>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import IntroductionComponent from "./components/MainComponents/IntroductionComponent.vue";
import ServicesComponent from "./components/MainComponents/ServicesComponent.vue";
import AboutWorkComponent from "./components/MainComponents/AboutWorkComponent.vue";
import PlansComponent from "./components/MainComponents/PlansComponent.vue";
import NewsComponent from "./components/MainComponents/NewsComponent.vue";
export default {
  name: 'App',
  components: {
    HeaderComponent,
    IntroductionComponent,
    ServicesComponent,
    AboutWorkComponent,
    PlansComponent,
    NewsComponent,
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped></style>