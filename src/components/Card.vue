<script lang="ts">
export default {
  name: "CardComponent",
  props: {
    pokemon: Object,
  },
};
</script>

<template>
  <article class="pokemon-card">
    <figure>
      <figcaption>{{ pokemon.name }}</figcaption>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </figure>
  </article>
</template>

<style scoped>
.pokemon-card {
  margin: 1rem;
  padding: 1rem 2rem;
  border-radius: 4px;
  background-color: #89ffe88c;
  box-shadow: 0px 0px 12px 3px #0000004f;
}

figcaption {
  display: block;
  font-size: 1.3rem;
  text-transform: capitalize;
}
</style>
