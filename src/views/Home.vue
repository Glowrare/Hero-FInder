<template>
  <main>
    <div>
      <router-link to="/find-a-hero">FIND ME A HERO!</router-link>
    </div>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
}
div {
  background: #1c57b0;
  border: 2px solid #ffffff;
  border-radius: 16px;
  height: 135px;
  width: min(650px, 90vw);
  color: #fff;
}
div:hover {
  background: #6e75f8;
  border-color: #1c57b0;
}
div a {
  text-decoration: none;
  display: flex;
  justify-content: center;
  height: inherit;
  color: inherit;
  align-items: center;
  font-size: min(54px, 5vw + 0.5rem);
}
</style>