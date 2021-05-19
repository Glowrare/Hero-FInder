<template>
  <header>
    <div class="header">
      <router-link class="logo-title" to="/">
        <img src="../assets/logo.png" alt="Hero Finder logo" />
        <h1>Hero Finder</h1></router-link
      >
    </div>
    <div class="back-to-search-box" v-show="searchResultPage">
      <router-link to="/find-a-hero">Back to search results</router-link>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    searchResultPage() {
      if (this.$route.path.startsWith("/search-result")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.header {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}
.logo-title {
  display: flex;
  align-items: center;
  width: 1000px;
  color: inherit;
  text-decoration: none;
}
.logo-title img {
  margin-right: 30px;
}
h1 {
  font-size: min(54px, 5vw + 0.5rem);
  margin: 0;
}
.back-to-search-box {
  position: relative;
}
::placeholder {
  color: white;
}

@media screen and (max-width: 768px) {
  h1 {
    display: none;
  }
}
</style>
