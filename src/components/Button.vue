<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",
});
</script>

<template>
  <button @click="$emit('onClick')"><slot></slot></button>
</template>

<style scoped>
button {
  font-weight: bold;
  margin: 1rem;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  background-color: rgba(255, 222, 134, 0.82);
  box-shadow: 0px 0px 6px 2px #2446374f;
  cursor: pointer;
  margin-bottom: 0.8rem;
  border: 2px solid;
  font-size: 1rem;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

button:hover {
  -webkit-transform: translateY(-10%);
  transform: translateY(-10%);
}
</style>
