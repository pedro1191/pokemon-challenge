<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardComponent",
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
});
</script>

<template>
  <article
    class="pokemon-card"
    :class="{ selected: pokemon.is_selected }"
    @click="$emit('selected', pokemon)"
  >
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
  background-color: rgba(137, 255, 232, 0.549);
  box-shadow: 0px 0px 6px 2px #2446374f;
  cursor: pointer;
}

.pokemon-card:hover,
.pokemon-card.selected {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  box-shadow: 0px 0 14px 5px #2446374f;
}

.pokemon-card.selected {
  background-color: rgba(255, 222, 134, 0.82);
}

figcaption {
  display: block;
  font-size: 1.3rem;
  text-transform: capitalize;
}
</style>
