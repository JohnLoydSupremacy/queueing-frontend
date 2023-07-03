<script setup>
import Button from "../components/Button.vue";
</script>

<template>
  <div class="dark:text-white">Ticket Display</div>
  <router-link to="/">
    <Button @click="clearStateAction">Start Over</Button>
  </router-link>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["clearState"]),
    clearStateAction() {
      this.clearState();
    },
  },
};
</script>
