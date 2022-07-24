<template>
  <header>
    <h1>Pokemon App!</h1>
  </header>

  <router-view />
</template>

<style>
@font-face {
  font-family: "PatrickHand";
  src: url("./assets/fonts/PatrickHand-Regular.ttf");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: rgb(43, 137, 236);
  background: linear-gradient(
    360deg,
    rgba(43, 137, 236, 1) 35%,
    rgba(59, 183, 249, 1) 100%
  );
  height: 100vh;
}

#app {
  font-family: PatrickHand, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  margin: 2rem 0 1rem 0;
  font-size: 2.5rem;
  color: #1d1e6f;
}
</style>
