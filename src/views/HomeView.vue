<template>
  <div class="home">
    <Card v-for="pokemon of pokemons" :key="pokemon.name" :pokemon="pokemon" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getPokemons } from "@/services/pokemon";
import Card from "@/components/Card.vue";
import IPokemon from "@/interfaces/IPokemon";

export default defineComponent({
  name: "HomeView",
  components: {
    Card,
  },
  data() {
    return {
      pokemons: [] as IPokemon[],
    };
  },
  mounted() {
    this.listPokemons();
  },
  methods: {
    async listPokemons() {
      this.pokemons = await getPokemons();
    },
  },
});
</script>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
