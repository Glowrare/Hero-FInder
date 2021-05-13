<template>
  <section>
    <div class="content">
      <div class="hero-image">
        <img src="" alt="" />
      </div>
      <div class="cover-text">
        <header>Hero <br /><span>magazine</span></header>
        <p class="name">
          meet <br /><span>{{ name }}</span>
        </p>
        <p class="subtitle">
          All you need to know about <span>{{ alias }}</span>
        </p>
        <div class="barcode">
          <img src="../assets/barcode.svg" alt="barcode" />
        </div>
      </div>
    </div>
    <div class="footer">
      <span>{{ name }}</span> | <span class="publisher">{{ publisher }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: String,
    publisher: String,
    alias: String,
  },
};
</script>

<style scoped>
section {
  background-color: #fff;
  /* height: calc(100vh - 200px); */
  height: 479px;
  width: min(560px, 100vw);
  max-width: calc(100vw - 100px);
  position: relative;
}
.content {
  display: flex;
}
.hero-image {
  width: 80%;
}
.hero-image img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}
.cover-text {
  /* width: 30%; */
  padding-right: 20px;
  padding-left: 20px;
}
header {
  text-transform: uppercase;
  color: #6e75f8;
  font-size: 48px;
  font-weight: bold;
  padding-top: 20px;
  margin-bottom: 50px;
  line-height: 1.5rem;
}
header span {
  color: #000;
  font-size: 16px;
  /* text-align: center; */
  text-transform: lowercase;
}
p.name {
  font-weight: 600;
  margin-bottom: 80px;
}
p.name span {
  font-weight: 700;
  font-size: 18px;
}
.subtitle {
  font-size: 14px;
  color: #6ebaf8;
  margin-bottom: 80px;
}
.subtitle span {
  font-size: 15px;
  font-weight: 600;
}
.barcode img {
  position: absolute;
  right: 20px;
}
.footer {
  background-color: #000;
  position: absolute;
  bottom: 0;
  width: inherit;
  height: 50px;
}
</style>