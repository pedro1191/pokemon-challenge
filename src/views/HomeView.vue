<template>
  <div class="home">
    <Card
      v-for="pokemon of pokemons"
      :key="pokemon.name"
      :pokemon="pokemon"
      @selected="handleOnSelectPokemon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getPokemons } from "@/services/pokemon";
import Card from "@/components/Card.vue";
import IHomeViewData from "@/interfaces/IHomeViewData";
import IPokemon from "@/interfaces/IPokemon";

export default defineComponent({
  name: "HomeView",
  components: {
    Card,
  },
  data(): IHomeViewData {
    return {
      pokemons: [] as IPokemon[],
      firstSelectedPokemon: null,
      secondSelectedPokemon: null,
    };
  },
  mounted() {
    this.listPokemons();
  },
  methods: {
    async listPokemons() {
      this.pokemons = await getPokemons();
    },
    handleOnSelectPokemon(selectedPokemon: IPokemon) {
      if (this.firstSelectedPokemon?.name === selectedPokemon.name) {
        this.firstSelectedPokemon = null;
        this.updatePokemons(selectedPokemon);
        return;
      }
      if (this.secondSelectedPokemon?.name === selectedPokemon.name) {
        this.secondSelectedPokemon = null;
        this.updatePokemons(selectedPokemon);
        return;
      }
      if (this.firstSelectedPokemon === null) {
        this.firstSelectedPokemon = selectedPokemon;
        this.updatePokemons(selectedPokemon);
        return;
      }
      if (this.secondSelectedPokemon === null) {
        this.secondSelectedPokemon = selectedPokemon;
        this.updatePokemons(selectedPokemon);
        return;
      }
    },
    updatePokemons(selectedPokemon: IPokemon) {
      this.pokemons = this.pokemons.map((pokemon) => {
        if (selectedPokemon.name === pokemon.name) {
          return {
            ...pokemon,
            is_selected: !pokemon.is_selected,
          };
        }

        return pokemon;
      });
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
