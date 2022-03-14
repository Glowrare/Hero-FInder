<template>
  <section>
    <div class="category">
      <select
        class="div-toggle"
        v-model="detailsCategory"
        @change="filterDetails()"
      >
        <option value="bio">Biography</option>
        <option value="appearance">Appearance</option>
        <option value="power">Powerstats</option>
        <option value="work">Work</option>
        <option value="connexn">Connections</option>
      </select>
    </div>
    <div class="details">
      <DetailsTable :selectedHero="selectedHero" />
    </div>
  </section>
</template>

<script>
import DetailsTable from "./DetailsTable";
export default {
  data() {
    return {
      detailsCategory: "bio",
    };
  },
  components: { DetailsTable },
  props: {
    selectedHero: Object,
  },
  methods: {
    filterDetails() {
      let allDetails = document.querySelectorAll(".details tr");
      let bioDetails = document.querySelectorAll(".bio");
      let appearanceDetails = document.querySelectorAll(".appearance");
      let powerDetails = document.querySelectorAll(".power");
      let workDetails = document.querySelectorAll(".work");
      let connexnDetails = document.querySelectorAll(".connexn");

      function hideAll() {
        for (let i = 0; i < allDetails.length; i++) {
          const allEl = allDetails[i];
          allEl.classList.add("hide-me");
        }
      }

      if (this.detailsCategory === "bio") {
        hideAll();
        for (let i = 0; i < bioDetails.length; i++) {
          const el = bioDetails[i];
          el.classList.remove("hide-me");
        }
      }
      if (this.detailsCategory === "appearance") {
        hideAll();
        for (let i = 0; i < appearanceDetails.length; i++) {
          const el = appearanceDetails[i];
          el.classList.remove("hide-me");
        }
      }
      if (this.detailsCategory === "power") {
        hideAll();
        for (let i = 0; i < powerDetails.length; i++) {
          const el = powerDetails[i];
          el.classList.remove("hide-me");
        }
      }
      if (this.detailsCategory === "work") {
        hideAll();
        for (let i = 0; i < workDetails.length; i++) {
          const el = workDetails[i];
          el.classList.remove("hide-me");
        }
      }
      if (this.detailsCategory === "connexn") {
        hideAll();
        for (let i = 0; i < connexnDetails.length; i++) {
          const el = connexnDetails[i];
          el.classList.remove("hide-me");
        }
      }
    },
  },
};
</script>

<style scoped>
section {
  height: 479px;
  width: 600px;
  border: solid 3px #fff;
  border-radius: 20px;
  background-color: #1c57b0;
  color: #fff;
}
.category {
  border-bottom: solid 3px #fff;
}
select {
  background: none;
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  border-radius: 20px;
  border: none;
  margin: 0 20px;
  padding: 5px 0;
  width: 90%;
}
select:focus-visible {
  outline: none;
}
select option {
  background: #1c57b0b0;
  font-size: 14px;
}
.details {
  height: calc(100% - 50px);
  overflow: auto;
}
/* START: Custom scrollbar */
.details::-webkit-scrollbar {
  width: 5px;
}
.details::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 10px;
}
.details::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}
/* END: Custom scrollbar */
</style>