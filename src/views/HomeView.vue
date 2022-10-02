<template>
  <div class="home">
    <Card
      v-for="pokemon of pokemons"
      :key="pokemon.name"
      :pokemon="pokemon"
      @onClick="handleOnClickPokemon"
    />
    <transition name="slide-up">
      <Battle
        class="battle"
        :firstPokemon="firstSelectedPokemon"
        :secondPokemon="secondSelectedPokemon"
        @fightEnd="handleOnFightEnd"
        v-if="firstSelectedPokemon && secondSelectedPokemon"
      />
    </transition>
    <transition name="slide-up">
      <EndGame
        class="end-game"
        :champion="champion"
        @playAgain="handleOnPlayAgain"
        v-if="champion"
      />
    </transition>
    <transition name="slide-up">
      <Snackbar @onClose="handleOnCloseSnackbar" v-if="winner && !champion">
        {{ winner.name }} has won the fight!
      </Snackbar>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getPokemons } from "@/services/pokemon";
import Battle from "@/components/Battle.vue";
import Card from "@/components/Card.vue";
import EndGame from "@/components/EndGame.vue";
import IHomeViewData from "@/interfaces/IHomeViewData";
import IPokemon from "@/interfaces/IPokemon";
import Snackbar from "@/components/Snackbar.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Battle,
    Card,
    EndGame,
    Snackbar,
  },
  data(): IHomeViewData {
    return {
      pokemons: [] as IPokemon[],
      firstSelectedPokemon: null,
      secondSelectedPokemon: null,
      winner: null,
    };
  },
  computed: {
    champion(): IPokemon | null {
      if (this.pokemons.length !== 1) return null;

      return this.winner || this.champion;
    },
  },
  mounted() {
    this.listPokemons();
  },
  methods: {
    async listPokemons() {
      this.pokemons = await getPokemons();
    },
    handleOnClickPokemon(selectedPokemon: IPokemon) {
      this.handleOnCloseSnackbar();

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
    handleOnPlayAgain() {
      this.firstSelectedPokemon = null;
      this.secondSelectedPokemon = null;
      this.winner = null;
      this.listPokemons();
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
    handleOnFightEnd(loser: IPokemon) {
      this.pokemons = this.pokemons.filter(
        (pokemon) => pokemon.name !== loser.name
      );
      if (this.firstSelectedPokemon?.name === loser.name) {
        this.firstSelectedPokemon = null;
      }
      if (this.secondSelectedPokemon?.name === loser.name) {
        this.secondSelectedPokemon = null;
      }
      this.winner = this.getWinner();
    },
    getWinner() {
      return this.firstSelectedPokemon || this.secondSelectedPokemon;
    },
    handleOnCloseSnackbar() {
      this.winner = null;
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

.battle,
.end-game {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
</style>
