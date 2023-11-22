<template>
  <HeaderComponent />
  <main>
    <IntroductionComponent />
    <ServicesComponent />
    <AboutWorkComponent />
    <PlansComponent />
  </main>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import IntroductionComponent from "./components/MainComponents/IntroductionComponent.vue";
import ServicesComponent from "./components/MainComponents/ServicesComponent.vue";
import AboutWorkComponent from "./components/MainComponents/AboutWorkComponent.vue";
import PlansComponent from "./components/MainComponents/PlansComponent.vue";
export default {
  name: 'App',
  components: {
    HeaderComponent,
    IntroductionComponent,
    ServicesComponent,
    AboutWorkComponent,
    PlansComponent,
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped></style>