<template>
  <Navbar :logo="logos_src" :alt="app_name" />
  <router-view />
  <FooterBurguer/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import FooterBurguer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    FooterBurguer,
  },

  data() {
    return {
      logos_src: "/img/logo.png",
      app_name: "Faça seu hamburguer",
    }
  },
}
</script>

<style>
   * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 550px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
