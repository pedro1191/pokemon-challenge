<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/Button.vue";
import IPokemon from "@/interfaces/IPokemon";
import type { PropType } from "vue";

export default defineComponent({
  name: "EndGameComponent",
  components: {
    Button,
  },
  props: {
    champion: {
      type: Object as PropType<IPokemon>,
      required: true,
    },
  },
  methods: {
    handleOnClick() {
      this.$emit("playAgain");
    },
  },
});
</script>

<template>
  <div class="end-game">
    <p>{{ champion.name }} is the champion!</p>
    <Button @onClick="handleOnClick">Play Again</Button>
  </div>
</template>

<style scoped>
.end-game {
  padding: 1rem;
  background-color: #89ddff;
}

.end-game p {
  text-transform: capitalize;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #0e2244;
}
</style>
