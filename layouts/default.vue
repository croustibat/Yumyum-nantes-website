<template>
  <div>
    <header>
      <!-- NAVIGATION START -->
      <nav class="main-navigation">
        <div class="logo">
          <img src="~/assets/img/logo.png" alt="Logo Yum Yum" />
        </div>
        <ul class="main-menu">
          <li class="menu-button">
            <nuxt-link class="menu-link" to="/carte/brochette">carte</nuxt-link>
          </li>
          <li class="menu-button">
            <a class="menu-link" href="contact.html">contact & infos</a>
          </li>
          <li class="menu-button--phone Elastic">
            <a href="tel:+33228449146">02 28 44 91 46</a>
          </li>
        </ul>
        <div class="burger"></div>
      </nav>
    </header>
    <nuxt />
  </div>
</template>
