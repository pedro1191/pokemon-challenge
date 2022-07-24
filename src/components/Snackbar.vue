<script lang="ts">
import { defineComponent } from "vue";

let timeout: number | undefined;
const defaultTimeoutInMS = 3000;

export default defineComponent({
  name: "SnackbarComponent",
  mounted() {
    timeout = setTimeout(() => {
      this.emitOnCloseEvent();
    }, defaultTimeoutInMS);
  },
  beforeUnmount() {
    clearTimeout(timeout);
  },
  methods: {
    emitOnCloseEvent() {
      this.$emit("onClose");
    },
  },
});
</script>

<template>
  <div class="snackbar" @click="emitOnCloseEvent"><slot></slot></div>
</template>

<style scoped>
.snackbar {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  font-weight: bold;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  background-color: rgba(255, 222, 134, 1);
  box-shadow: 0px 0px 6px 2px #2446374f;
  cursor: pointer;
  margin-bottom: 0.8rem;
  border: 2px solid;
  font-size: 1.5rem;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  z-index: 2;
  text-transform: capitalize;
}

.snackbar:hover {
  background-color: rgba(137, 255, 232, 0.549);
}
</style>
