<template>
  <header>
    <div class="logo-title">
      <img src="../assets/logo.png" alt="Hero Finder logo" />
      <h1>Hero Finder</h1>
    </div>
    <div class="back-to-search-box" v-show="searchResultPage">
      <router-link to="/find-a-hero">Back to search results</router-link>
    </div>
  </header>
</template>

<script>
// import SearchBox from "./SearchBox";
export default {
  // components: {
  //   SearchBox,
  // },
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
header {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
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
.back-to-search-box {
  position: relative;
}
::placeholder {
  color: white;
}
</style>
