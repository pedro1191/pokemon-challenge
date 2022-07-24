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
  box-shadow: 0px 0px 6px 2px #2446374f;
}

.pokemon-card:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  box-shadow: 0px 0 14px 5px #2446374f;
}

figcaption {
  display: block;
  font-size: 1.3rem;
  text-transform: capitalize;
}
</style>
