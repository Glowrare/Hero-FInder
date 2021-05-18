<template>
  <main class="search-result">
    <hero-magazine :name="selectedHero.name"></hero-magazine>
    <details-card></details-card>
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
  // data() {
  //   return {
  //     selectedHero: null,
  //   };
  // },

  // created() {
  //   this.selectedHero = this.$store.getters["heroes/heroesSearchList"].find(
  //     (hero) => hero.id === this.id
  //   );
  // },
};
</script>

<style scoped>
.search-result {
  margin: 125px 20px 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>