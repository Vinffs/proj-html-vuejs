<template>
  <section class="brightness-section">
    <div class="container p-0">
      <div class="title-container">
        <h2>Start Your Free Consultation</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
      </div>
      <div class="text-center">
        <button>CONTACT US NOW</button>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../../assets/data/store";
export default {
  name: 'ConsultationComponent',
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
  position: relative;
  overflow: hidden;


  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/CTA-seo-1.jpg');
    background-size: 120%;
    background-position-y: 40%;
    background-position-x: 10%;
    filter: brightness(15%);
    z-index: -1;
  }
}

.container {
  padding: 5em 0 !important;
  margin-bottom: 2em;
  filter: brightness(100%);
}

.title-container {
  width: 50%;
  padding: 2em;
  margin: 0 auto;
  color: $color_terciary;
  text-align: center;

  h2 {
    font-weight: 800;
    font-size: 1.8em;
    padding-bottom: 0.5em;
  }

  p {
    line-height: 2em;
    word-spacing: 0.1em;
    font-size: 1.1em;
  }
}

button {
  font-size: 0.8em;
  font-weight: bold;
  color: $color_terciary;
  padding: 0.8em 2.5em;
  border: none;
  border-radius: 50px;
  background-color: $color_primary;
}
</style>
