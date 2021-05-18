<template>
  <i class="fas fa-search" :class="iconclass"></i>
  <input
    :class="inputclass"
    type="text"
    name="search"
    :placeholder="placeholder"
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
  text-indent: 30px;
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
  font-size: 24px;
  cursor: default;
}
.homeiconclass {
  top: calc(85% / 2);
  left: 10px;
}
/* .result-iconclass {
  color: #6ebaf8;
  top: 40%;
  left: 10px;
}
.result-inputclass {
  background: #000000;
  border: 2px solid #ffffff;
  border-radius: 16px;
  height: 50px;
  font-family: monospace;
  width: min(345px, 90vw);
  font-size: 16px;
} */
</style>