<template>
  <swiper :navigation="true" :mousewheel="true" :keyboard="true" :modules="modules" class="mySwiper" :loop="true"
    id="mySlider" :speed="500" :autoplay="{
      delay: 10000,
      disableOnInteraction: true,
      pauseOnMouseEnter: false,
    }">
    <swiper-slide v-for="slide in store.slider" class="slide" :class="slide.bg">
      <div class="row height justify-content-between">
        <div class=" ps-2 pe-0 col-7 d-flex flex-column justify-content-evenly align-items-start">
          <h1 class="title">{{ slide.title }}</h1>
          <p>{{ slide.text }}</p>
          <div class="buttons my-4">
            <button class="btn">BUY AVADA NOW</button>
            <button class="btn">CONTACT US</button>
          </div>
        </div>
        <div class="col-4 py-4 mx-1" :class="slide.class">
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>


<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { store } from "../../assets/data/store";
export default {
  name: 'HeroSlider',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation, Mousewheel, Keyboard, Autoplay],
      store,
    };
  },
};

</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;

.slide {
  padding-top: 5em;
  padding-bottom: 6em;
}

#mySlider {
  --swiper-navigation-size: 1.5em;
  --swiper-navigation-color: white;
}

.first {
  background-image: url('/images/best-seo-services-slide-3.png');
  transform: scale(1.7);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: 50%;
  opacity: 0;
  animation: images 1000ms ease-out forwards;
  animation-delay: 3s;

}

.second {
  background-image: url('/images/best-sem-seo-services-slide-2.png');
  transform: scale(1.8);
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: 50%;
  opacity: 0;
  animation: images 1000ms ease-out forwards;
  animation-delay: 3s;

}

.third {
  background-image: url('/images/best-seo-services-slide-1.png');
  transform: scale(1.8);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0;
  animation: images 1000ms ease-out forwards;
  animation-delay: 3s;
}

.bg-first {
  background: url('/images/lines-1.png') center center no-repeat, url('/images/pattern_background.png'), $color_purple_blue;
  background-position-y: 10%;

}

.bg-second {
  background: url('/images/lines-1.png') center center no-repeat, url('/images/pattern_background.png'), $color_purple_yellow;
  background-position-y: 10%;

}

.bg-third {
  background: url('/images/lines-1.png') center center no-repeat, url('/images/pattern_background.png'), $color_blue_purple;
  background-position-y: 10%;

}

h1 {
  font-size: 3em;
  font-weight: bold;
  color: $color_terciary;
  padding-bottom: 0.5em;
  letter-spacing: 1px;
  opacity: 0;


  animation: text 1000ms ease-out forwards;
  animation-delay: 1s;
}

p {
  color: $color_terciary;
  font-size: 1.2em;
  text-wrap: balance;
  opacity: 0;

  animation: text 1000ms ease-out forwards;
  animation-delay: 1.5s;

}

.swiper-slide {
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

}


.height {
  padding: 9em 0;
}

.buttons {

  button {
    font-size: 0.8em;
    font-weight: bold;
    color: $color_terciary;
    padding: 1em 3em;
    border-radius: 50px;

  }

  button:first-child {
    background-color: $color_primary;
    margin-right: 1em;
    transition: all 0.3s linear;
    opacity: 0;

    animation: buttons 1000ms ease-out forwards;
    animation-delay: 2s;

    &:hover {
      filter: brightness(110%);
      box-shadow: rgba(255, 255, 255, 0.2) 0px 5px 15px 0px;
      transition: all 0.3s linear;
    }
  }

  button:last-child {
    background-color: $color_secondary;
    transition: all 0.3s linear;
    opacity: 0;

    animation: buttons 1000ms ease-out forwards;
    animation-delay: 2.5s;

    &:hover {
      filter: brightness(110%);
      box-shadow: rgba(255, 255, 255, 0.2) 0px 5px 15px 0px;
      transition: all 0.3s linear;
    }
  }

}

@keyframes text {
  from {
    opacity: 0;
    transform: translateX(-10%);
  }

  to {
    opacity: 1;
    transform: translateX(0%);
  }
}

@keyframes buttons {
  from {
    opacity: 0;
    transform: translateY(50%);
  }

  to {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes images {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes background {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);
  }
}
</style>
