<template>
  <section>
    <div class="container p-0">
      <div class="title-container">
        <h2>Our Work</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam esse quas sunt pariatur vel, iusto provident
          officia sit deserunt obcaecati.</p>
      </div>
      <div class="row m-0">
        <div class="col-4 p-0" v-for=" article in store.ourWork">
          <a :href="article.ref"><img class="w-100" :src="('/images/case-study-gallery' + article.path + '400x300.jpg')"
              :alt="article.name"></a>
        </div>
      </div>
      <div class="text-center py-3">
        <button>VIEW OUR WORK</button>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../../assets/data/store";
export default {
  name: 'store',
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
  background-color: $color_terciary;
}

.title-container {
  width: 50%;
  padding: 3em 0;
  margin: auto;

  h2 {
    font-weight: 800;
    font-size: 1.8em;
    padding-bottom: 0.5em;
  }

  h2,
  p {
    text-align: center;
  }
}

.card {
  background: transparent;

  a {
    color: $color_primary;
  }
}

.row {

  .col-4:nth-child(4),
  .col-4:first-child {
    padding-right: 1em !important;
  }

  .col-4:nth-child(2),
  .col-4:nth-child(5) {
    padding: 0 0.5em !important;
  }

  .col-4:nth-child(3),
  .col-4:last-child {
    padding-left: 1em !important;
  }

  .col-4:first-child,
  .col-4:nth-child(2),
  .col-4:nth-child(3) {
    padding-bottom: 1em !important;
  }


}

button {
  font-size: 1em;
  font-weight: bold;
  color: $color_terciary;
  margin: 5em 0;
  padding: 0.8em 2.5em;
  border: none;
  border-radius: 50px;
  background-color: $color_primary;
}
</style>