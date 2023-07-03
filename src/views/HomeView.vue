<script setup>
import Question from "../components/Question.vue";
import Button from "../components/Button.vue";
</script>

<template>
  <Question class="text-center" text="Choose one" />
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-2 mt-2"
  >
    <RouterLink to="/id-input">
      <Button @click="setUserTypeAction('student')"> Student </Button>
    </RouterLink>
    <RouterLink to="/id-input">
      <Button @click="setUserTypeAction('guest')"> Guest </Button>
    </RouterLink>
    <!-- <Button> Guest </Button>
    <Button> Guest </Button> -->
  </div>
</template>

<script>
export default {
  methods: {
    setUserTypeAction(userType) {
      this.$store.commit("setUserType", userType);
    },
  },
};
</script>
