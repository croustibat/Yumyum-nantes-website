<template>
  <div>
    <div id="smoke" class="column-photo">
      <img
        src="~/assets/img/loclac.png"
        alt="Soupe Pho Bô"
        class="product-image"
      />
      <SmokeCanvas class="loclac" />
    </div>
    <div class="product-box">
      <div class="product-tag">plat</div>
      <div class="centered">
        <h1>BŒUF FAÇON "LOC LAC"</h1>
        <hr />
        <p class="product-description">
          Dés de bœuf marinés, riz à la tomate et œuf sur le plat
        </p>
        <p class="product-price">9,8€</p>
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
