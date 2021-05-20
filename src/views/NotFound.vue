<template>
  <main>
    <div>
      <router-link to="/"
        >Oops! Page not Found.
        <br />
        <span class="ft24">Go back Home</span></router-link
      >
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
  background: #6e75f8;
  border: 2px solid #ffffff;
  border-radius: 16px;
  padding: 20px;
  width: min(650px, 90vw);
  color: #fff;
}
div:hover {
  background: #3d7ee1;
}
div a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: inherit;
  color: inherit;
  align-items: center;
  font-size: min(54px, 5vw + 0.5rem);
  text-transform: uppercase;
}
.ft24 {
  font-size: min(24px, 3vw + 0.5rem);
}
</style>