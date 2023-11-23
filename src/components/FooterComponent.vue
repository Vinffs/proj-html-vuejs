<template>
  <footer>
    <div class="container d-flex flex-column align-items-center py-5">
      <div id="img-container" class="pb-5">
        <a href=""><img src="/images/logo_seo_1x.png" alt="logo"></a>
      </div>
      <div id="footer-nav" class="py-2">
        <ul class=" list-unstyled d-flex align-items-center m-0 py-1">
          <li class="px-4" v-for="index in store.navbar">
            <a class="text-decoration-none" :class="{ 'active-menu': index.active }" :href="index.ref">
              {{ index.title }}
            </a>
          </li>
          <a href="#" class="px-4 text-decoration-none"><span>Get In Touch Now</span></a>
        </ul>
      </div>
      <div id="info" class="py-2">
        <ul class="list-unstyled d-flex">
          <li class="px-3" v-for="content in store.info">
            <span v-if="content.symbol">&copy;</span>
            {{ content.name }}
            <span>{{ content.company }}</span>
          </li>
        </ul>
      </div>
      <div id="social" class="py-2">
        <a :href="social.ref" v-for="social in store.socials">
          <i class="fa-brands" :class="social.icon"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>

import { store } from "../assets/data/store";
export default {
  name: 'FooterComponent',
  data() {
    return {
      store,
    }
  }
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#footer-nav {
  a {
    font-weight: 600;
    font-size: 1.1em;
    color: $color_light_grey;
    transition: all 0.3s linear;

    &:hover {
      color: $color_primary;
      transition: all 0.3s linear;
    }
  }

  .active-menu {
    color: $color_primary;
  }
}


#info {
  li {
    border-right: 1px solid $color_dark_grey;
    color: $color_light_grey;

    span {
      font-weight: 700;
    }
  }

  li:last-child {
    border-right: none !important;
  }
}

#social {
  i {
    font-size: 1.5em;
    padding: 0 0.5em;
    color: $color_light_grey;
    transition: all 0.3s linear;

    &:hover {
      color: $color_primary;
      transition: all 0.3s linear;
    }
  }


}
</style>