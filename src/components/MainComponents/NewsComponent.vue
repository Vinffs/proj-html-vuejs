<template>
  <section>
    <div class="container py-5">
      <div class="w-50 text-center mx-auto">
        <h1>Our News</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ipsam qui ab architecto ullam facilis minus
          beatae
          voluptas voluptate dolorum.</p>
      </div>
      <div class="row justify-content-between p-0">
        <div class=" col-4" v-for="post in store.ourNews">
          <div class="card border-0">
            <div class="card-img-top">
              <img :src="post.path" :alt="post.title">
            </div>
            <div class="card-body">
              <h5 class="card-title fs-bold">{{ post.title }}</h5>
              <h6 class="card-text fs-bold">{{ post.date }}</h6>
              <p class="card-text">{{ post.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button>GO TO NEWS</button>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../../assets/data/store";
export default {
  name: 'NewsComponent',
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

  .card-img-top {
    height: 250px;
    overflow: hidden !important;

    img {
      width: 100%;
      height: 100%;
      transition: all 0.3s linear;

      &:hover {
        transform: scale(1.2);
        transition: all 0.3s linear;
      }
    }

  }

  .col-4 {
    padding: 1em;
    text-align: center;

    &:first-child,
    &:last-child,
    &:nth-child(2) {
      padding-left: 0.75em;
      padding-right: 0.75em;
    }

    .card {
      padding: 1em 0 0.5em 0;
      background-color: transparent;
    }

    h5 {
      font-weight: 800;
      color: $color_primary;
    }

    h6 {
      font-size: 0.9em;
    }

    p {
      line-height: 2em;
      padding-bottom: 2em;
    }
  }

  button {
    font-size: 1em;
    font-weight: bold;
    color: $color_terciary;
    padding: 0.8em 2.5em;
    border: none;
    border-radius: 50px;
    background-color: $color_primary;
  }
}
</style>