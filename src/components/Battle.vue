<script lang="ts">
import { defineComponent } from "vue";
import { getRandomLoser } from "@/helpers";
import BattleDescription from "@/components/BattleDescription.vue";
import Button from "@/components/Button.vue";
import IPokemon from "@/interfaces/IPokemon";
import type { PropType } from "vue";

export default defineComponent({
  name: "BattleComponent",
  components: {
    BattleDescription,
    Button,
  },
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
  methods: {
    handleOnClick() {
      const loser = getRandomLoser(this.firstPokemon, this.secondPokemon);
      this.$emit("fightEnd", loser);
    },
  },
});
</script>

<template>
  <div class="battle">
    <BattleDescription
      :firstPokemon="firstPokemon"
      :secondPokemon="secondPokemon"
    />
    <Button @onClick="handleOnClick">Fight!</Button>
  </div>
</template>

<style scoped>
.battle {
  padding: 1rem;
  background-color: #89ddff;
}
</style>
