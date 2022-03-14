<template>
  <div
    class="hf-bg"
    :style="{ backgroundImage: pathIsResult ? `url(${Image})` : '' }"
  >
    <div class="container">
      <the-header></the-header>
      <router-view v-slot="SlotProps"
        ><transition name="route" mode="out-in">
          <component :is="SlotProps.Component"></component> </transition
      ></router-view>
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

import Image from "@/assets/HFbg.png";
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
      if (this.$route.path.startsWith("/search-result")) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap");
:root {
  --logo-purple: #6e75f8;
  --pry-blue: #6ebaf8;
  --sec-blue: #1c57b0;
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
.container {
  max-width: 1800px;
  margin: 0 auto;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
.route-enter-active {
  transition: all 0.5s ease-in;
}
.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
