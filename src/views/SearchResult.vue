<template>
  <main class="search-result">
    <hero-magazine :selectedHero="selectedHero"></hero-magazine>
    <details-card :selectedHero="selectedHero"></details-card>
  </main>
</template>
<script>
import DetailsCard from "../components/DetailsCard.vue";
import HeroMagazine from "../components/HeroMagazine.vue";

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

  created() {
    this.selectedHero = this.$store.getters["heroes/heroesSearchList"].find(
      (hero) => hero.id === this.id
    );
  },
};
</script>

<style scoped>
.search-result {
  margin: 50px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: calc(100vh - 300px);
}
</style>