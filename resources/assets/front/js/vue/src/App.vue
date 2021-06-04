<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
npm install vue bootstrap bootstrap-vue
<script>
// Importuojame Komponento iš kito failo
import Navbar from '@/components/Navbar.vue';

export default {
  // Tam kad naudoti importuotu komponentus <template>...</template>
  // Turime įvardinti kaip juos vadinsime
  components: {
    // Navbar: Navbar
    Navbar,
  },
};
</script>

<style lang="scss">
body *{
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
