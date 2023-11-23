<template>
  <section>
    <div class="container pt-5">
      <div class="w-50 text-center mx-auto">
        <h1>Meet The New Agency SEO Template From The Avada Team</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ipsam qui ab architecto ullam facilis minus
          beatae
          voluptas voluptate dolorum.</p>
      </div>
      <div class="row justify-content-between p-0">
        <div class=" col-4" v-for="card in store.introduction">
          <div class="card border-0">
            <div class="icon-container">
              <i class="fa-solid" :class="card.icon"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title fs-bold">{{ card.title }}</h5>
              <p class="card-text">{{ card.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class=" text-center">
        <img src="/images/agency-seo-desk-front-800x380.jpg" alt="desktop">
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../../assets/data/store";
export default {
  name: 'IntroductionComponent',
  data() {
    return {
      store,
    }
  }
}
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;


section {
  background-color: $terciary_variant;

  .w-50 {
    h1 {
      font-size: 2em;
      font-weight: 800;
    }

    h1,
    p {
      padding-bottom: 1em;
    }

  }

  .col-4 {
    padding: 1em;
    text-wrap: balance;
    text-align: center;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    .card {
      padding: 2em 0;

      &:hover h5 {
        color: $color_primary;
        transition: all 0.3s linear;
      }
    }


    h5 {
      font-weight: 800;
      padding-bottom: 1em;
      transition: all 0.3s linear;
    }

    p {
      line-height: 2em;
      padding-bottom: 2em;
    }
  }
}

.icon-container {
  width: 30%;
  height: 30%;
  overflow: hidden;
  margin: 0 auto;

  i {
    font-size: 2.5em;
    padding-bottom: 0.5em !important;
    color: $color_primary;
  }

  &:hover i {
    animation: translate 250ms;
    transition: all 0.5s linear
  }
}

@keyframes translate {
  0% {
    transform: translateX(0%);
  }

  50% {
    transform: translateX(200%);
  }

  51% {
    transform: translateX(-200%);
  }

  100% {
    transform: translateX(0%);
  }
}
</style>