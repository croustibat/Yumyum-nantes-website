<template>
  <main>
    <div class="wrapper">
      <div class="lateral-menu">
        <div class="logo">
          <nuxt-link to="/">
            <img src="~/assets/img/logo.png" alt="Logo Yum Yum" />
          </nuxt-link>
        </div>
        <ul class="secondary-menu">
          <li>
            <nuxt-link to="/carte/brochette">Brochettes</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/carte/loclac">Loc Lac</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/carte/padthai">Pad Thaï</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/carte/bobun">Bo Bun</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/carte/phobo">Soupe</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/carte/starter">Entrées</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/carte/desserts">Desserts</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/carte/drinks">Boissons</nuxt-link>
          </li>
        </ul>
      </div>
      <nuxt />
    </div>
  </main>
</template>
