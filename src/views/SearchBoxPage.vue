<template>
  <main>
    <div class="search-box">
      <search-box
        iconclass="homeiconclass"
        placeholder="Type a superhero name here & press enter"
        inputclass="homeinputclass"
        @find-hero="findHero"
      ></search-box>
    </div>
    <div v-if="searchComplete">
      <div class="search-result" v-if="!notFound">
        <h3>Showing search result for: {{ heroName }}</h3>
        <search-list :results="results" @see-more="seeMore"></search-list>
      </div>
      <div v-else>
        <h3 v-show="!otherError">
          No result matching "{{ heroName }}" was found
        </h3>
        <h3 v-show="otherError">Oops! Something went wrong. Try again.</h3>
      </div>
    </div>
  </main>
</template>

<script>
import SearchBox from "../components/SearchBox";
import SearchList from "../components/SearchList";
export default {
  name: "SearchBoxPage",
  components: {
    SearchBox,
    SearchList,
  },
  computed: {
    results() {
      return this.$store.getters["heroes/heroesSearchList"];
    },
    heroName() {
      return this.$store.getters["heroes/heroName"];
    },
    notFound() {
      return this.$store.getters["heroes/notFound"];
    },
    otherError() {
      return this.$store.getters["heroes/otherError"];
    },
    searchComplete() {
      return this.$store.getters["heroes/searchComplete"];
    },
  },
  methods: {
    findHero(heroName) {
      this.$store.dispatch("heroes/findHero", heroName);
    },
    seeMore() {
      this.$router.push("/search-result");
    },
  },
};
</script>

<style scoped>
main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
div.search-box,
div.search-result {
  background: #6e75f8;
  border: 2px solid #ffffff;
  border-radius: 16px;
  margin-bottom: 20px;
  color: #fff;
}
div.search-box {
  height: 135px;
  position: relative;
  width: min(650px, 90vw);
}
div.search-result {
  height: auto;
  min-height: 100px;
  padding: 20px;
  max-width: 90vw;
}
h3 {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 0;
  color: #fff;
}
</style>