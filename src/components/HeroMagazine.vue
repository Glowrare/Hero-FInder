<template>
  <section>
    <div class="content">
      <div class="hero-image">
        <img :src="selectedHero.image" :alt="`image of ${selectedHero.name}`" />
      </div>
      <div class="cover-text">
        <header>Hero <br /><span>magazine</span></header>
        <p class="name">
          meet <br /><span>{{ selectedHero.name }}</span>
        </p>
        <p class="subtitle">
          All you need to know about
          <span>{{ selectedHero.fullName }}</span>
        </p>
        <div class="barcode">
          <img src="../assets/barcode.svg" alt="barcode" />
        </div>
      </div>
    </div>
    <div class="footer">
      <span>{{ selectedHero.name }}</span> |
      <span class="publisher">{{ selectedHero.publisher }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    selectedHero: Object,
  },
};
</script>

<style scoped>
section {
  background-color: #fff;
  height: 479px;
  width: min(560px, 100vw);
  margin-bottom: 30px;
  /* max-width: calc(100vw - 100px); */
  position: relative;
}
.content {
  display: flex;
  width: 100%;
  height: 100%;
}
.hero-image {
  width: 70%;
}
.hero-image img {
  width: 100%;
  object-fit: cover;
  height: 100%;
}
.cover-text {
  width: 30%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 120px;
}
header {
  text-transform: uppercase;
  color: #6e75f8;
  font-size: 48px;
  font-weight: bold;
  padding-top: 20px;
  line-height: 1.5rem;
}
header span {
  color: #000;
  font-size: 16px;
  text-transform: lowercase;
}
p.name {
  font-weight: 600;
}
p.name span {
  font-weight: 700;
  font-size: 18px;
}
.subtitle {
  font-size: 14px;
  color: #6ebaf8;
}
.subtitle span {
  font-size: 15px;
  font-weight: 600;
}
.barcode img {
  position: absolute;
  right: 20px;
  bottom: 60px;
}
.footer {
  background-color: #000;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30px;
  padding: 10px;
  font-size: 12px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
}

@media screen and (max-width: 500px) {
  .cover-text {
    width: 50%;
  }
}
</style>