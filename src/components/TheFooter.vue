<template>
  <footer>
    <div>
      <span
        ><a href="https://twitter.com/glowrare" target="_blank"
          ><i class="fab fa-twitter"></i></a
      ></span>
      <span
        ><a href="https://www.linkedin.com/in/ajibolanle" target="_blank"
          ><i class="fab fa-linkedin-in"></i></a
      ></span>

      <span
        ><a href="https://github.com/Glowrare" target="_blank"
          ><i class="fab fa-github"></i></a
      ></span>
    </div>
    <p>Hero Finder v1.2.0 | &copy; 2021 Ajibolanle Gloria</p>
  </footer>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&display=swap");
footer > * {
  font-family: "Courier Prime", monospace;
  font-size: 14px;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #000;
  padding: 0 10px;
}
footer i {
  color: #000;
}
footer span:not(:last-child) {
  margin-right: 30px;
}
footer a {
  padding: 5px;
  border: solid 1px transparent;
}
footer a:hover {
  border-color: #000;
  border-radius: 50%;
  background-color: #fff;
}
</style>