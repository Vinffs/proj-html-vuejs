<template>
  <div class="container">
    <swiper :autoplay="{
      delay: 3000,
      pauseOnMouseEnter: true,
    }" :watchSlidesProgress="true" :slidesPerView="4" :spaceBetween="5" :loop="true" :grabCursor="true"
      :modules="modules" id="mySwiper">
      <swiper-slide v-for="client in store.clients">
        <a :href="client.ref"><img class="w-75" :src="client.path" :alt="client.name"></a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { store } from "../../../assets/data/store";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { Autoplay } from 'swiper/modules';
export default {
  name: 'ClientsSlider',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      store,
      modules: [Autoplay],
    }
  }

}
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/partials/variables" as *;

.container {
  border-top: 0.5px solid lightgrey;
  margin-top: 2em;
}

#mySwiper {
  padding: 1.5em;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>