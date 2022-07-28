<script lang="ts">
import { defineComponent } from "vue";
import IPokemon from "@/interfaces/IPokemon";
import type { PropType } from "vue";

export default defineComponent({
  name: "BattleDescriptionComponent",
  props: {
    firstPokemon: {
      type: Object as PropType<IPokemon>,
      required: true,
    },
    secondPokemon: {
      type: Object as PropType<IPokemon>,
      required: true,
    },
  },
});
</script>

<template>
  <div class="pokemons">
    <span>{{ firstPokemon.name }}</span>
    <span> VS </span>
    <span>{{ secondPokemon.name }}</span>
  </div>
</template>

<style scoped>
.pokemons {
  text-transform: capitalize;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #0e2244;
}
</style>
