<template>
  <main>
    <div class="search-box">
      <search-box
        iconclass="homeiconclass"
        placeholder="Type superhero search name & press enter"
        inputclass="homeinputclass"
        @find-hero="findHero"
      ></search-box>
    </div>
    <div v-if="searchComplete == false">
      <img src="../assets/spinner.gif" alt="Loading spinner" />
    </div>
    <div v-if="searchComplete && newSearchComplete" class="full-height">
      <div class="search-result" v-if="!notFound">
        <h3>Showing search result for: {{ heroName }}</h3>
        <search-list :results="results"></search-list>
      </div>
      <div v-else>
        <h3 v-show="!otherError">
          No result matching "{{ heroName }}" was found
        </h3>
        <h3 v-show="otherError">Oops! Something went wrong. Try again.</h3>
      </div>
    </div>
    <div v-else-if="!newSearchComplete">
      <h3>{{ moreCharReq }}</h3>
    </div>
  </main>
</template>

<script>
import SearchBox from "../components/SearchBox";
import SearchList from "../components/SearchList";
export default {
  name: "SearchBoxPage",
  data() {
    return {
      selectedHero: null,
      moreCharReq: "",
      newSearchComplete: true,
    };
  },
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
      if (heroName.length >= 3) {
        this.$store.dispatch("heroes/findHero", heroName);
        this.newSearchComplete = true;
      } else {
        this.newSearchComplete = false;
        this.moreCharReq = "Enter at least 3 characters";
      }
    },
  },
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 300px);
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  align-items: center;
}
.full-height {
  height: calc(100% - min(135px, 20vw));
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
  height: min(135px, 20vw);
  position: relative;
  width: min(650px, 90vw);
}
div.search-result {
  max-height: calc(100% - 70px);
  padding: 20px;
  width: min(80vw, 900px);
  overflow: auto;
}
/* START: Custom scrollbar */
.search-result::-webkit-scrollbar {
  width: 15px;
}
.search-result::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 10px;
}
.search-result::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}
/* END: Custom scrollbar */
h3 {
  font-size: min(24px, 5vw + 0.175rem);
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  margin-top: 0;
  color: #000;
}
</style>