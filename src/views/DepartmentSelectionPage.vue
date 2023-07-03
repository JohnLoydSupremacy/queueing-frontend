<script setup>
import Question from "../components/Question.vue";
import Button from "../components/Button.vue";
</script>

<template>
  <Question class="text-center" text="What is your Department?" />
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-2 mt-2"
  >
    <RouterLink
      v-for="department in departments"
      :key="department.id"
      to="/service-selection"
    >
      <Button @click="setDepartmentAction(department)">
        {{ department.name }}
      </Button>
    </RouterLink>
    <!-- <RouterLink to="/service-selection">
      <Button @click="setDepartmentAction('Dept2')"> Department 2 </Button>
    </RouterLink>
    <RouterLink to="/service-selection">
      <Button @click="setDepartmentAction('Dept3')"> Department 3 </Button>
    </RouterLink>
    <RouterLink to="/service-selection">
      <Button @click="setDepartmentAction('Dept4')"> Department 4 </Button>
    </RouterLink> -->
    <!-- <Button> Guest </Button>
    <Button> Guest </Button> -->
  </div>
</template>

<script>
import axios from "axios";
import { DEPARTMENTS_ENDPOINT } from "../config.js";
export default {
  data() {
    return {
      departments: [],
    };
  },
  methods: {
    async getDepartments() {
      const response = await axios.get(DEPARTMENTS_ENDPOINT);
      this.departments = response.data;
      console.log(response);
    },
    setDepartmentAction(department) {
      this.$store.commit("setDepartment", department.id);
      this.$store.commit("setDepartmentName", department.name);
    },
  },
  async created() {
    await this.getDepartments();
  },
};
</script>
