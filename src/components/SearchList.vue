<template>
  <ul>
    <li v-for="result in results" :key="result.id" @click="$emit('see-more')">
      {{ result.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    results: Array,
  },
  emits: ["see-more"],
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
  padding: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
ul li:hover {
  background: #3d7ee1;
  color: #fff;
}
</style>