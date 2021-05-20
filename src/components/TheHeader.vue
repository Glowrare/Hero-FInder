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
header {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  padding-top: 10px;
}
.header {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin-bottom: 20px;
}
a {
  color: inherit;
  text-decoration: none;
}
.logo-title {
  display: flex;
  align-items: center;
}
.logo-title img {
  margin-right: 30px;
}
h1 {
  font-size: min(54px, 5vw + 0.5rem);
  margin: 0;
}
.back-to-search-box {
  margin: 0 20px 20px;
  padding: 10px 0;
  height: 70px;
  display: flex;
  align-items: center;
  background: #fff;
  max-width: 150px;
}
.back-to-search-box a {
  display: flex;
  align-items: center;
  text-align: center;
  height: inherit;
  background: #000;
  color: #fff;
  margin: 10px;
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 11px;
  box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.2);
}
.back-to-search-box a:hover {
  background-color: #6e75f8;
  box-shadow: 5px 25px 10px rgb(0 0 0 / 25%);
}

@media screen and (max-width: 768px) {
  h1 {
    display: none;
  }
  .logo-title img {
    margin-right: 0;
  }
  .header {
    padding-right: 0;
    padding-left: 10px;
  }
  .back-to-search-box {
    margin-left: 10px;
  }
}
</style>
