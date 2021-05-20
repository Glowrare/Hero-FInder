<template>
  <ul>
    <li v-for="result in results" :key="result.id" :id="result.id">
      <router-link :to="`/search-result/${result.id}`">
        {{ result.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    results: Array,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-left: 0;
}
ul li {
  background: #ffffff;
  border: 2px solid #3d7ee1;
  border-radius: 16px;
  color: #3d7ee1;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
ul li:hover {
  background: #3d7ee1;
  color: #fff;
}
a {
  color: inherit;
  text-decoration: none;
  padding: 10px;
  display: block;
}

@media screen and (max-width: 425px) {
  ul li {
    flex-basis: 100%;
  }
}
</style>