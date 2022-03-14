<template>
  <table>
    <tbody>
      <tr class="bio">
        <td>Full Name:</td>
        <td>{{ selectedHero.fullName }}</td>
      </tr>
      <tr class="bio">
        <td>Alter Egos:</td>
        <td>{{ selectedHero.alterEgos }}</td>
      </tr>
      <tr class="bio">
        <td>Aliases:</td>
        <td>{{ selectedHero.aliases }}</td>
      </tr>
      <tr class="bio">
        <td>Place of Birth:</td>
        <td>{{ selectedHero.placeOfBirth }}</td>
      </tr>
      <tr class="bio">
        <td>First Appearance:</td>
        <td>{{ selectedHero.firstAppearance }}</td>
      </tr>
      <tr class="bio">
        <td>Publisher:</td>
        <td>{{ selectedHero.publisher }}</td>
      </tr>
      <tr class="bio">
        <td>Alignment:</td>
        <td>{{ selectedHero.alignment }}</td>
      </tr>
      <tr class="appearance hide-me">
        <td>Gender:</td>
        <td>{{ selectedHero.gender }}</td>
      </tr>
      <tr class="appearance hide-me">
        <td>Race:</td>
        <td>{{ selectedHero.race }}</td>
      </tr>
      <tr class="appearance hide-me">
        <td>Height:</td>
        <td>{{ selectedHero.height }}</td>
      </tr>
      <tr class="appearance hide-me">
        <td>Weight:</td>
        <td>{{ selectedHero.weight }}</td>
      </tr>
      <tr class="appearance hide-me">
        <td>Eye Color:</td>
        <td>{{ selectedHero.eyeColor }}</td>
      </tr>
      <tr class="appearance hide-me">
        <td>Hair Color:</td>
        <td>{{ selectedHero.hairColor }}</td>
      </tr>
      <tr class="power hide-me">
        <td>Intelligence:</td>
        <td>
          <span
            class="intellect-stat"
            :style="{ width: `${selectedHero.intelligence}%` }"
          >
            {{ selectedHero.intelligence }}</span
          >
        </td>
      </tr>
      <tr class="power hide-me">
        <td>Strength:</td>
        <td>
          <span
            class="strength-stat"
            :style="{ width: `${selectedHero.strength}%` }"
            >{{ selectedHero.strength }}</span
          >
        </td>
      </tr>
      <tr class="power hide-me">
        <td>Speed:</td>
        <td>
          <span
            class="speed-stat"
            :style="{ width: `${selectedHero.speed}%` }"
            >{{ selectedHero.speed }}</span
          >
        </td>
      </tr>
      <tr class="power hide-me">
        <td>Durability:</td>
        <td>
          <span
            class="durability-stat"
            :style="{ width: `${selectedHero.durability}%` }"
            >{{ selectedHero.durability }}</span
          >
        </td>
      </tr>
      <tr class="power hide-me">
        <td>Power:</td>
        <td>
          <span
            class="power-stat"
            :style="{ width: `${selectedHero.power}%` }"
            >{{ selectedHero.power }}</span
          >
        </td>
      </tr>
      <tr class="power hide-me">
        <td>Combat:</td>
        <td>
          <span
            class="combat-stat"
            :style="{ width: `${selectedHero.combat}%` }"
            >{{ selectedHero.combat }}</span
          >
        </td>
      </tr>
      <tr class="work hide-me">
        <td>Occupation:</td>
        <td>{{ selectedHero.occupation }}</td>
      </tr>
      <tr class="work hide-me">
        <td>Base of operation:</td>
        <td>{{ selectedHero.opsBase }}</td>
      </tr>
      <tr class="connexn hide-me">
        <td>Group Affiliation:</td>
        <td>{{ selectedHero.grpAffiliation }}</td>
      </tr>
      <tr class="connexn hide-me">
        <td>Relatives:</td>
        <td>{{ selectedHero.relatives }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    selectedHero: Object,
  },
};
</script>
<style scoped>
table {
  margin: 15px 0;
  border-spacing: 0;
}
tr {
  vertical-align: top;
}
tr:hover {
  background-color: #6edaf8;
  background-color: #6e75f8;
}
td {
  padding: 10px;
}
td:first-child {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
}
.power td:nth-child(2) {
  width: 100%;
  background: #ccc;
  border-radius: 30px;
  padding: 0;
}
.power span {
  display: flex;
  justify-content: center;
  border-radius: inherit;
  padding: 10px 0;
}
.power span:hover {
  font-weight: 700;
}
.intellect-stat {
  background-color: #21094e;
}
.intellect-stat:hover {
  background-color: #392758;
}
.strength-stat {
  background-color: #511281;
}
.strength-stat:hover {
  background-color: #47295f;
}
.speed-stat {
  background-color: #0061a8;
}
.speed-stat:hover {
  background-color: #2c5e81;
}
.durability-stat {
  background-color: #04009a;
}
.durability-stat:hover {
  background-color: #33317a;
}
.power-stat {
  background-color: #334443;
}
.power-stat:hover {
  background-color: #484d4c;
}
.combat-stat {
  background-color: #34656d;
}
.combat-stat:hover {
  background-color: #52787e;
}
.hide-me {
  display: none;
}
</style>