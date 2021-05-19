<template>
  <i class="fas fa-search" :class="iconclass"></i>
  <input
    :class="inputclass"
    type="text"
    name="search"
    :placeholder="placeholder"
    autocomplete="off"
    v-model="searchHero"
    @keyup.enter="$emit('find-hero', searchHero)"
  />
</template>

<script>
export default {
  data() {
    return {
      searchHero: "",
    };
  },
  props: {
    placeholder: String,
    inputclass: String,
    iconclass: String,
  },
  emits: ["find-hero"],
};
</script>

<style scoped>
i {
  position: absolute;
}
::placeholder {
  color: #fff;
}
input {
  text-indent: 35px;
}
input:focus-visible {
  outline: none;
}
.homeinputclass {
  height: 95%;
  width: 99%;
  background: none;
  border: none;
  color: #fff;
  border-radius: inherit;
  font-weight: 600;
  font-size: min(24px, 2vw + 0.375rem);
  cursor: default;
}
.homeiconclass {
  top: calc(80% / 2);
  left: 10px;
  font-size: min(24px, 2vw + 0.375rem);
}
</style>