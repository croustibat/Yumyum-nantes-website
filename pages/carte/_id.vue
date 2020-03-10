<template>
  <div>
    <div v-if="query === 'brochette'" class="column">
      <Brochette />
    </div>
    <div v-if="query === 'loclac'" class="column">
      <Loclac />
    </div>
    <div v-if="query === 'padthai'" class="column">
      <Padthai />
    </div>
    <div v-if="query === 'bobun'" class="column">
      <Bobun />
    </div>
    <div v-if="query === 'phobo'" class="column">
      <Phobo />
    </div>
    <div v-if="query === 'starter'" class="column">
      <Starter />
    </div>
    <div v-if="query === 'desserts'" class="column">
      <Desserts />
    </div>
    <div v-if="query === 'drinks'" class="column">
      <Drinks />
    </div>
  </div>
</template>

<script>
import Loclac from '~/components/Loclac'
import Brochette from '~/components/Brochette'
import Bobun from '~/components/Bobun'
import Padthai from '~/components/Padthai'
import Phobo from '~/components/Phobo'
import Starter from '~/components/Starter'
import Drinks from '~/components/Drinks'
import Desserts from '~/components/Desserts'

export default {
  layout: 'lateral-menu',
  components: {
    Loclac,
    Brochette,
    Bobun,
    Padthai,
    Phobo,
    Starter,
    Drinks,
    Desserts
  },
  data() {
    return { query: this.$route.params.id }
  },
  mounted: () => {
    const $ = window.$
    $(function() {
      const url = window.location.href
      $('.lateral-menu li a').each(function() {
        if (url === this.href) {
          $(this).addClass('active')
        }
      })

      window.gsap.to('.lateral-menu', { duration: 1, x: 100 })
    })
  }
}
</script>
