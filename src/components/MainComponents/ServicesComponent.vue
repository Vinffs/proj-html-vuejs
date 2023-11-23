<template>
  <section>
    <div class="container pt-3">
      <div class="title-container">
        <h2>See Our Top Notch Services</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam esse quas sunt pariatur vel, iusto provident
          officia sit deserunt obcaecati.</p>
      </div>
      <div class="row">
        <div class="col-3" v-for="card in store.services">
          <div class="card text-center">
            <div class="card-title">
              <div class="icon-container">
                <i :class="card.icon"></i>
              </div>
              <h5>{{ card.title }}</h5>
            </div>
            <div class="card-body">
              <p class="card-text">{{ card.text }}</p>
              <a class=" text-decoration-none" :href="card.ref">Read More ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../../assets/data/store";
export default {
  name: 'ServicesComponent',
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
  background: url('/images/pattern_background.png') $variant_secondary_dark;
  background-position-y: 80%;
  background-size: cover;
  padding-bottom: 10em;

}

.title-container {
  width: 50%;
  padding: 3em 0;
  margin: auto;

  h2 {
    font-weight: 700;
    font-size: 1.7em;
    padding-bottom: 0.5em;
  }

  h2,
  p {
    color: $color_terciary;
    text-align: center;
  }

}

.card {
  color: $color_terciary;
  padding: 1.5em;
  background: $brigther_variant_secondary;


  .card-title {
    color: $color_terciary;
    transition: all 0.3s linear;

    h5 {
      font-weight: 800;
      padding-top: 1em;
    }

    &:hover {
      color: $color_primary;
      transition: all 0.3s linear;

      i {
        animation: translate 300ms;
        transition: all 0.5s linear
      }
    }

  }

  p {
    padding-bottom: 0.5em;
    line-height: 2em;
    color: $color_terciary;
  }

  a,
  i {
    color: $color_primary;
  }

  .icon-container {
    width: 30%;
    height: 30%;
    overflow: hidden;
    margin: 0 auto;

    i {
      font-size: 2.5em;
      padding-bottom: 0.5em;
    }

  }


}

@keyframes translate {
  0% {
    transform: translateX(0%);
  }

  50% {
    transform: translateX(150%);
  }

  51% {
    transform: translateX(-150%);
  }

  100% {
    transform: translateX(0%);
  }
}
</style>