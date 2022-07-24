<script lang="ts">
export default {
  name: "CardComponent",
  props: {
    pokemon: Object,
  },
};
</script>

<template>
  <article>
    <figure>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <figcaption>{{ pokemon.name }}</figcaption>
    </figure>
  </article>
</template>

<style scoped></style>
