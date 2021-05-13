<template>
  <footer>
    <div>
      <span
        ><a href="https://twitter.com/glowrare" target="_blank"
          ><i class="fab fa-twitter"></i></a
      ></span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span
        ><a href="https://www.linkedin.com/in/ajibolanle" target="_blank"
          ><i class="fab fa-linkedin-in"></i></a></span
      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span
        ><a href="https://github.com/Glowrare" target="_blank"
          ><i class="fab fa-github"></i></a
      ></span>
    </div>
    <p>&copy; 2021 Ajibolanle Gloria</p>
  </footer>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&display=swap");
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
footer > * {
  font-family: "Courier Prime", monospace;
  font: 14px;
  display: flex;
  justify-content: center;
  color: #fff;
}
footer i {
  color: #fff;
}
</style>