<template>
  <div class="container">
    <div class="title-container">
      <h2>What Our Clients Say</h2>
    </div>
    <swiper :autoplay="{
      delay: 5000,
      pauseOnMouseEnter: true,
      waitForTransition: true,
    }" id="mySlider" :loop="true" :spaceBetween="30" :pagination="{ clickable: true, }" :modules="modules"
      :grabCursor="true">
      <swiper-slide v-for="person in store.reviews">
        <div class="pb-3">
          <img :src="person.image" :alt="person.name">
        </div>
        <p>{{ person.text }}</p>
        <div><strong>{{ person.name }}</strong>, {{ person.company }}</div>
      </swiper-slide>
    </swiper>
  </div>
  <ClientsSlider />
</template>

<script>
import { store } from "../../assets/data/store";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import ClientsSlider from "./Slider/ClientsSlider.vue";
import "swiper/scss";
import "swiper/scss/pagination";

export default {
  name: 'ReviewsComponent',
  components: {
    Swiper,
    SwiperSlide,
    ClientsSlider,
  },
  data() {
    return {
      store,
      modules: [Pagination, Autoplay],
    }
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

.title-container {
  width: 50%;
  padding-top: 3em;
  margin: auto;
  text-align: center;

  h2 {
    font-weight: 800;
    font-size: 1.8em;
    padding-bottom: 0.5em;
  }

}

#mySlider {

  --swiper-pagination-bullet-size: 1em;
  --swiper-pagination-color: black !important;
  --swiper-pagination-bullet-inactive-color: darkgrey !important;
  display: flex;
  justify-content: center;
  align-items: center;


}

.swiper {
  width: 50%;
  height: 100%;
  margin: 0 auto;
}

.swiper-slide {
  text-align: center;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4em;
}

.swiper-slide img {
  width: 75%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
