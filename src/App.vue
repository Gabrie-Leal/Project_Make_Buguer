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
    border: 0;
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }

  :root{
    --corTitulo:#222;
    --corTexto:#FCBA03;
  }

  main{
    margin:50px;
    min-height: 250px;
  }

  h1{
    text-align: center;
    font-size: 42px;
    color:var(--corTitulo);
    margin-bottom: 30px;
  }
</style>
