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
            <i :class="card.icon"></i>
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
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
  background-color: $variant_secondary_dark;
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
  padding: 1.5em;
  background: $brigther_variant_secondary;

  h5 {
    font-weight: 800;
    padding-bottom: 0.5em;
  }

  h5,
  p {
    color: $color_terciary;
  }

  p {
    padding-bottom: 0.5em;
    line-height: 2em;
  }


  a,
  i {
    color: $color_primary;
  }

  i {
    font-size: 2em;
    padding-bottom: 0.5em;
  }
}
</style>