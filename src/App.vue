<template>
  <the-header></the-header>
  <main class="search-result">
    <hero-magazine></hero-magazine>
    <details-card></details-card>
  </main>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import HeroMagazine from './components/HeroMagazine.vue'
import DetailsCard from './components/DetailsCard.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    HeroMagazine,
    DetailsCard
  }

  //FETCH API URL: https://superheroapi.com/api/3688794591166691
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  background-color: #6EBAF8;
}
main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 50px;
}
</style>
