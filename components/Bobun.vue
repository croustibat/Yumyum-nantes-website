<template>
  <div>
    <div id="smoke" class="column-photo">
      <img src="~assets/img/bun.png" alt="Soupe Pho Bô" class="product-image" />
      <SmokeCanvas id="canvas" class="bobun"></SmokeCanvas>
    </div>
    <div class="product-box">
      <div class="product-tag">plat</div>
      <div class="centered">
        <h1>BO BUN</h1>
        <hr />
        <p class="product-description">
          Viande de bœuf ou crevettes, vermicelles de riz, crudités, nems,
          cacahuètes
        </p>
        <div class="vegetarian">
          <img src="~assets/img/vegetarian.png" alt="plat végétarien" />
          <p>existe en version végétarienne</p>
        </div>
        <p class="product-price vege">9,5€</p>
      </div>
    </div>
  </div>
</template>

<script>
import SmokeCanvas from '~/components/SmokeCanvas'

export default {
  components: {
    SmokeCanvas
  }
}
</script>
