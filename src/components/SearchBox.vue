<template>
  <i class="fas fa-search" :class="iconclass"></i>
  <input
    :class="inputclass"
    type="text"
    name="search"
    :placeholder="placeholder"
    autocomplete="off"
    v-model="searchHero"
    @blur="$emit('find-hero', searchHero)"
    @keyup.enter="$event.target.blur()"
  />
</template>

<script>
export default {
  data() {
    return {
      searchHero: '',
    };
  },
  props: {
    placeholder: String,
    inputclass: String,
    iconclass: String,
  },
  emits: ['find-hero'],
};
</script>

<style scoped>
i {
  position: absolute;
}
::placeholder {
  color: #000;
}
input {
  text-indent: 40px;
}
input:focus-visible {
  outline: none;
}
.homeinputclass {
  height: 95%;
  width: 99%;
  background: none;
  border: none;
  color: #000;
  border-radius: inherit;
  font-weight: 600;
  font-size: min(24px, 2vw + 0.375rem);
  cursor: default;
}
.homeiconclass {
  top: calc(80% / 2);
  left: 10px;
  font-size: min(24px, 2vw + 0.375rem);
  color: #000;
}
</style>
