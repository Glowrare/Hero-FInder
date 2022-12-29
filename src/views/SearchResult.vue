<template>
  <main class="search-result">
    <button @click="generateImage" class="search-result-btn">
      Generate Cover as Image
    </button>
    <div id="output"></div>
    <div class="search-result-content">
      <hero-magazine :selectedHero="selectedHero" :id="selectedHero.id"></hero-magazine>
      <details-card :selectedHero="selectedHero"></details-card>
    </div>
  </main>
</template>
<script>
import DetailsCard from '../components/DetailsCard.vue';
import HeroMagazine from '../components/HeroMagazine.vue';

import html2canvas from 'html2canvas';

export default {
  name: 'SearchResult',
  components: {
    HeroMagazine,
    DetailsCard,
  },
  props: ['id'],
  data() {
    return {
      selectedHero: {},
    };
  },
  methods: {
    generateImage() {
      const container = document.getElementById(`${this.selectedHero.id}`);
      const output = document.getElementById('output');

      // Convert to Image
      html2canvas(container, { allowTaint: true }).then(function(canvas) {
        canvas.setAttribute('id', 'image-canvas');

        const message = document.createElement('p');
        message.textContent = 'Image generated successfully! Right click/long press image to save to your device.';
        message.style.fontStyle = 'italic';
        message.style.fontWeight = '600';
        message.style.color = '#005206';

        output.innerHTML = '';
        output.appendChild(message);
        output.appendChild(canvas);
      });
    },
  },

  created() {
    this.selectedHero = this.$store.getters['heroes/heroesSearchList'].find((hero) => hero.id === this.id);
  },
};
</script>

<style scoped>
.search-result-btn {
  margin: 10px;
  padding: 15px;
  background: #000;
  border: none;
  font-family: 'Montserrat', sans-serif;
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
#output:not(:empty) {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
