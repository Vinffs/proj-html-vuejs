<template>
  <section>
    <div class="container p-0">
      <div class="title-container">
        <h2>Our Plans</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam esse quas sunt pariatur vel, iusto provident
          officia sit deserunt obcaecati.</p>
      </div>
      <div class="row m-0">
        <div class="col-3 p-0 " v-for="plan in store.ourPlans">
          <div class="p-2">
            <div class="card text-center rounded-0 py-4">
              <div class="card-body">
                <h5 class="card-title fw-bold">{{ plan.title }}</h5>
                <p class="card-text d-flex justify-content-center">
                <div class="currency d-flex">
                  <div>
                    {{ plan.currency }}
                  </div>
                  <div>
                    {{ plan.price }}
                  </div>
                </div>
                <div class="d-flex flex-column in-column align-items-start">
                  <div>
                    {{ plan.decimals }}
                  </div>
                  <div>
                    {{ plan.subscription }}
                  </div>
                </div>
                </p>
                <ul class=" list-unstyled">
                  <li class="py-3" v-for="description in plan.features"> {{ description }}</li>
                </ul>
                <a href="#" class="btn button" :class="{ 'active-button': plan.active }">Start Today</a>
              </div>
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
  name: 'PlansComponent',
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
  background-image: url('/images/background1.jpg');
  padding: 4em 0;

  .title-container {
    width: 50%;
    padding-bottom: 3em;
    margin: auto;
    color: $color_terciary;

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

  .button {
    padding: 0.5em 2em;
    margin-bottom: 0.5em;
    border: 1px solid $color_dark_grey;
    border-radius: 20px;
    font-weight: 600;
  }

  .active-button {
    background-color: $color_primary;
    color: $color_terciary;
    border: 1px solid $color_terciary;
  }

  .card-body {

    h5 {
      font-size: 1.6em;
      font-weight: 800;
      padding-bottom: 1em;
    }

    .currency {
      div:first-child {
        padding-top: 0.6em;
        font-size: 1.2em;
        font-weight: 700;
        color: $color_dark_grey;
      }

      div:last-child {
        font-size: 3em !important;
        font-weight: 700;
        color: $color_secondary;
      }

    }

    .in-column {
      padding-top: 0.8em;

      div:first-child {
        color: $color_secondary;
        font-size: 1.2em;
        font-weight: 700;
      }

      div:last-child {
        color: $color_light_grey;
        font-size: 0.7em;
        font-weight: 700;
        font-style: italic;
      }
    }

  }


}
</style>