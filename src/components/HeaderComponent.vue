<template>
  <header>
    <div class="container">
      <nav class="py-4 d-flex justify-content-between align-items-center">
        <div>
          <img src="/images/logo_seo_w_1x.png" alt="logo">
        </div>
        <div>
          <ul class=" list-unstyled d-flex align-items-center m-0 py-1">
            <li class="px-4" v-for="section in store.navbar"><a class=" text-decoration-none"
                :class="{ 'active-menu': section.active }" :href="section.ref">{{
                  section.title }}</a>
              <button class="mx-1 apply-btn" v-show="section.button">APPLY</button>
            </li>
            <button class="mx-2 my-0 btn yellow-btn">GET IN TOUCH NOW</button>
          </ul>
        </div>
      </nav>
    </div>
    <HeroSlider />
  </header>
</template>

<script>
import { store } from "../assets/data/store";
import HeroSlider from "./HeaderComponents/HeroSlider.vue";
export default {
  name: 'HeaderComponent',
  components: {
    HeroSlider,
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.container {
  position: relative;
}

nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  .active-menu {
    color: $color_primary;
  }
}

header {
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
    transition: all 0.3s linear;

    &:hover {
      filter: brightness(110%);
      box-shadow: rgba(255, 255, 255, 0.2) 0px 5px 15px 0px;
      transition: all 0.3s linear;
    }

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

      &:hover {
        filter: brightness(110%);
        box-shadow: rgba(255, 255, 255, 0.2) 0px 5px 15px 0px;
        transition: all 0.3s linear;
      }
    }

    button:last-child {
      background-color: $color_secondary;
      transition: all 0.3s linear;

      &:hover {
        filter: brightness(110%);
        box-shadow: rgba(255, 255, 255, 0.2) 0px 5px 15px 0px;
        transition: all 0.3s linear;
      }
    }

  }

  a {
    color: $color_terciary;
    transition: all 0.3s linear;

    &:hover {
      color: $color_primary;
      transition: all 0.3s linear;
    }
  }

}
</style>