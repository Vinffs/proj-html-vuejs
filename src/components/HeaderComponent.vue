<template>
  <header>
    <div class="container">
      <nav class="py-4 d-flex justify-content-between align-items-center">
        <div>
          <img src="/images/logo_seo_w_1x.png" alt="logo">
        </div>
        <div>
          <ul class=" list-unstyled d-flex align-items-center m-0 py-1">
            <li class="px-4" v-for="section in store.navbar"><a class=" text-decoration-none text-white"
                :href="section.ref">{{
                  section.title }}</a>
              <button class="mx-1 apply-btn" v-show="section.button">APPLY</button>
            </li>
            <button class="mx-2 my-0 btn yellow-btn">GET IN TOUCH NOW</button>
          </ul>
        </div>
      </nav>
      <div class="row height">
        <div class=" ps-2 pe-0 py-5 col-5 d-flex flex-column justify-content-center">
          <h1 class="title">SEM Campaigns Made Simple With Avada</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Phaselius eu ornare erat. Curabitur pulvinar elit.
          </p>
          <div class="buttons my-4">
            <button class="btn">BUY AVADA NOW</button>
            <button class="btn">CONTACT US</button>
          </div>
        </div>
        <div class="col-7 ps-0">
          <img src="/images/best-sem-seo-services-slide-2.png" alt="computer-image">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { store } from "../assets/data/store";
export default {
  name: 'HeaderComponent',
  data() {
    return {
      store,
    }
  }
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

header {
  background: url('/images/pattern_background.png') top right repeat, $color_purple_yellow;
  background-size: contain;

  &>div:first-child {
    background: url('/images/lines-1.png') top center no-repeat;
  }

  h1 {
    font-size: 3em;
    font-weight: bolder;
    color: $color_terciary;
    padding-bottom: 0.5em;
    letter-spacing: 1px;
  }

  p {
    color: $color_terciary;
    font-size: 1.2em;
  }

  .apply-btn {
    color: $color_primary;
    background-color: transparent;
    border: 1px solid $color_primary;
    border-radius: 5px;
    font-size: 0.8em;
    padding: 2px 5px;
  }

  .yellow-btn {
    color: $color_terciary;
    margin-top: 1em;
    padding: 0.6em 1.4em;
    font-size: 0.8em;
    border-radius: 20px;
    font-weight: bold;
    background-color: $color_primary;
  }

  .height {
    padding-bottom: 10rem;
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
    }

    button:last-child {
      background-color: $color_secondary;
    }

  }

}
</style>