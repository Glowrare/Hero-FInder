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
      <p class="bio">Full Name: {{ fullName }}</p>
      <p class="bio">Alter Egos: {{ alterEgos }}</p>
      <p class="bio">Aliases: {{ aliases }}</p>
      <p class="bio">Place of Birth: {{ placeOfBirth }}</p>
      <p class="bio">First Appearance: {{ firstAppearance }}</p>
      <p class="bio">Publisher: {{ publisher }}</p>
      <p class="bio">Alignment: {{ alignment }}</p>
      <p class="appearance hide-me">Gender: {{ gender }}</p>
      <p class="appearance hide-me">Race: {{ race }}</p>
      <p class="appearance hide-me">Height: {{ height }}</p>
      <p class="appearance hide-me">Weight: {{ weight }}</p>
      <p class="appearance hide-me">Eye Color: {{ eyeColor }}</p>
      <p class="appearance hide-me">Hair Color: {{ hairColor }}</p>
      <p class="power hide-me">Intelligence: {{ intelligence }}</p>
      <p class="power hide-me">Strength: {{ strength }}</p>
      <p class="power hide-me">Speed: {{ speed }}</p>
      <p class="power hide-me">Durability: {{ durability }}</p>
      <p class="power hide-me">Power: {{ power }}</p>
      <p class="power hide-me">Combat: {{ combat }}</p>
      <p class="work hide-me">Occupation: {{ occupation }}</p>
      <p class="work hide-me">Base of operation: {{ opsBase }}</p>
      <p class="connexn hide-me">Group Affiliation: {{ grpAffiliation }}</p>
      <p class="connexn hide-me">Relatives: {{ relatives }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      detailsCategory: "bio",
    };
  },
  props: {
    fullName: String,
    alterEgos: String,
    aliases: String,
    placeOfBirth: String,
    firstAppearance: String,
    publisher: String,
    alignment: String,
    gender: String,
    race: String,
    height: String,
    weight: String,
    eyeColor: String,
    hairColor: String,
    intelligence: String,
    strength: String,
    speed: String,
    durability: String,
    power: String,
    combat: String,
    occupation: String,
    opsBase: String,
    grpAffiliation: String,
    relatives: String,
  },
  methods: {
    filterDetails() {
      let allDetails = document.querySelectorAll(".details p");
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
  margin-right: 50px;
  height: 479px;
  width: 600px;
  border: solid 3px #fff;
  border-radius: 20px;
  background-color: #3d7ee1;
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
  margin: 0 20px;
  width: 90%;
}
select option {
  background: #3d7ee1;
}
.hide-me {
  display: none;
}
.details {
  margin: 0 20px;
}
</style>