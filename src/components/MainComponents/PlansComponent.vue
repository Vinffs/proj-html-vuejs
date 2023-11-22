<template>
  <section>
    <div class="container p-0">
      <div class="title-container">
        <h2>Our Plans</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam esse quas sunt pariatur vel, iusto provident
          officia sit deserunt obcaecati.</p>
      </div>
      <div class="row m-0">
        <div class="col-3 p-0" v-for=" article in store.ourWork">
          <a :href="article.ref"><img class="w-100" :src="('/images/case-study-gallery' + article.path + '400x300.jpg')"
              :alt="article.name"></a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../../assets/data/store";
export default {
  name: 'PlansComponent',
  data() {
    return {
      store,
    }
  }

}
</script>

<style lang="scss" scoped>
section {
  height: 1000px;
  background-image: url('/images/background1.jpg');

  div.container {
    height: 1000px;
  }
}
</style>