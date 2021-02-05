<template>
  <header>
    <div class="logo-title">
      <img src="../assets/logo.png" alt="Hero Finder logo" />
      <h1>Hero Finder</h1>
    </div>
    <div class="search-box">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Type a superhero name here"
        v-model="searchHero"
      />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchHero: "",
    };
  },
};
</script>

<style scoped>
header {
  margin: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}
.logo-title {
  display: flex;
  align-items: center;
  width: 1000px;
}
.logo-title img {
  margin-right: 30px;
}
h1 {
  font-size: 54px;
  margin: 0;
  
}
input {
  height: 30px;
  width: 350px;
  border: solid white 2px;
  border-radius: 10px;
  background-color: black;
  text-indent: 20px;
  color: white;
  font-family: monospace;
  outline: none;
}
::placeholder {
  color: white;
}
</style>
