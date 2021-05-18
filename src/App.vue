<template>
  <div
    class="hf-bg"
    :style="{ backgroundImage: pathIsResult ? `url(${Image})` : '' }"
  >
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

import Image from "@/assets/superhero-534120_1920.jpg";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      Image,
    };
  },
  computed: {
    pathIsResult() {
      if (this.$route.path === "/search-result") {
        return false;
      } else {
        return true;
      }
    },
  },
  //FETCH API URL: https://superheroapi.com/api/3688794591166691
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap");
:root {
  --logo-purple: #6e75f8;
  --pry-blue: #6ebaf8;
  --sec-blue: #3d7ee1;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  background-color: var(--pry-blue);
}
.hf-bg {
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>
