<script setup>
import Question from "../components/Question.vue";
import Button from "../components/Button.vue";
import FormLayout from "../views/FormLayout.vue"
</script>

<template>
  <FormLayout>
    <Question class="text-center" text="Select an Option" />
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
  </FormLayout>  
</template>

<script>
import { mapMutations } from "vuex";
export default {

  methods: {
    ...mapMutations(["setSection"]),
    setUserTypeAction(userType) {
      this.$store.commit("setUserType", userType);
    },
  },
  created() {
    this.setSection("UserTypeSelectionPage");
  },
};
</script>
