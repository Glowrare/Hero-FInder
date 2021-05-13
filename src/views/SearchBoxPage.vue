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
  </main>
</template>

<script>
import SearchBox from "../components/SearchBox";
import SearchList from "../components/SearchList";
export default {
  name: "SearchBoxPage",
  data() {
    return {
      results: [],
      heroName: "",
      notFound: false,
      otherError: false,
    };
  },
  components: {
    SearchBox,
    SearchList,
  },
  methods: {
    async findHero(heroName) {
      const Url = `https://superheroapi.com/api.php/3688794591166691/search/${heroName}`;
      const res = await fetch(Url);
      const jsonData = await res.json();

      if (jsonData.response === "success") {
        const data = await jsonData.results;

        //RESEST EXISTING RESULT ARRAY TO NULL
        this.results.length = 0;
        this.heroName = heroName;

        //Loop through API object response and push to results array
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            const el = data[key];
            this.results.push(el);
            console.log(this.results);
            // console.log(el.id);
          }
        }
      } else if (jsonData.response === "error") {
        this.notFound = true;
        if (jsonData.error === "character with given name not found") {
          this.heroName = heroName;
        } else {
          this.otherError = true;
        }
      }
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