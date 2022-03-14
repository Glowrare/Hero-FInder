<template>
  <main class="search-result">
    <button @click="downloadHandler" class="search-result-btn">
      Download Hero Magazine
    </button>
    <div class="search-result-content">
      <hero-magazine
        :selectedHero="selectedHero"
        :id="selectedHero.id"
      ></hero-magazine>
      <details-card :selectedHero="selectedHero"></details-card>
    </div>
  </main>
</template>
<script>
import DetailsCard from "../components/DetailsCard.vue";
import HeroMagazine from "../components/HeroMagazine.vue";

import domtoimage from "dom-to-image-more";

export default {
  name: "SearchResult",
  components: {
    HeroMagazine,
    DetailsCard,
  },
  props: ["id"],
  data() {
    return {
      selectedHero: {},
    };
  },
  methods: {
    downloadHandler() {
      domtoimage
        .toJpeg(document.getElementById(`${this.selectedHero.id}`), {
          quality: 0.95,
        })
        .then(function (dataUrl) {
          var link = document.createElement("a");
          link.download = "hero-magazine.jpeg";
          link.href = dataUrl;
          link.click();
        });
    },
  },

  created() {
    this.selectedHero = this.$store.getters["heroes/heroesSearchList"].find(
      (hero) => hero.id === this.id
    );
  },
};
</script>

<style scoped>
.search-result-btn {
  margin: 10px;
  padding: 15px;
  background: #000;
  border: none;
  font-family: "Montserrat", sans-serif;
  border-radius: 30px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}
.search-result-btn:hover {
  background: var(--sec-blue);
}
.search-result-content {
  margin: 50px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: calc(100vh - 300px);
}
</style>