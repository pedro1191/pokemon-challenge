<template>
  <header>
    <h1>Pokémon App!</h1>
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
  background: linear-gradient(
    360deg,
    rgba(43, 137, 236, 1) 35%,
    rgba(59, 183, 249, 1) 100%
  );
}

#app {
  font-family: PatrickHand, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

h1 {
  padding: 2rem 0 1rem 0;
  font-size: 2.5rem;
  color: #1d1e6f;
}

.slide-up-enter-active {
  animation: slide-up 0.5s;
}
.slide-up-leave-active {
  animation: slide-up 0.5s reverse;
}
@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
