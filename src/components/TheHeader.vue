<template>
  <header>
    <div class="logo-title">
      <img src="../assets/logo.png" alt="Hero Finder logo">
      <h1>Hero Finder</h1>
    </div>
    <div class="search-box">
      <input type="text" name="search" id="search" placeholder="Type a superhero name here" v-model="searchHero">
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchHero: ""
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
