<template>
  <div>
    <div id="smoke" ref="smoke" class="column-photo">
      <img
        src="~/assets/img/phobo.png"
        alt="Soupe Pho Bô"
        class="product-image"
      />
      <SmokeCanvas class="soup" />
    </div>
    <div class="product-box">
      <div class="product-tag">plat</div>
      <div class="centered">
        <h1>BROCHETTE</h1>
        <hr />
        <p class="product-description">
          Brochettes de bœuf ou de crevettes à la citronnelle, riz à la tomate
        </p>
        <p class="product-price">9,5€</p>
      </div>
    </div>
  </div>
</template>

<script>
import SmokeCanvas from '~/components/SmokeCanvas'

export default {
  components: {
    SmokeCanvas
  },
  mounted: () => {}
}
</script>
