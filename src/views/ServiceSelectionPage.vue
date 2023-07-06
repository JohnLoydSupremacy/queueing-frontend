<script setup>
import Question from "../components/Question.vue";
import Button from "../components/Button.vue";
</script>

<template>
  <Question class="text-center" text="Select a Service" />
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-2 mt-2"
    v-if="services.length > 0"
  >
      <RouterLink
        v-for="service in services"
        :key="service.id"
        to="/user-type"
      >
        <Button @click="setServiceAction(service)">
          {{ service.name }}
        </Button>
      </RouterLink>
    <!-- <RouterLink to="/additional-requests">
      <Button @click="setServiceAction('Service2')"> Service 2 </Button>
    </RouterLink>
    <RouterLink to="/additional-requests">
      <Button @click="setServiceAction('Service3')"> Service 3 </Button>
    </RouterLink>
    <RouterLink to="/additional-requests">
      <Button @click="setServiceAction('Service4')"> Service 4 </Button>
    </RouterLink> -->
    <!-- <Button> Guest </Button>
    <Button> Guest </Button> -->
  </div>
  <div v-else><p class="dark:text-white">No services found.</p></div>
</template>

<script>
import axios from "axios";
import { DEPARTMENTS_ENDPOINT } from "../config";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      department: null,
      services: [],
    };
  },
  methods: {
    ...mapMutations(["setSection"]),
    async getServices(departmentId) {
      const response = await axios.get(
        `${DEPARTMENTS_ENDPOINT}/${departmentId}`
      );
      this.services = response.data;
      console.log(response);
    },
    setServiceAction(service) {
      this.$store.commit("setService", service.id);
      this.$store.commit("setServiceName", service.name);
    },
  },
  created() {
    const department = this.$store.getters.getDepartment;
    this.department = department;
    this.getServices(department);
    this.setSection("ServiceSelectionPage");
  },
};
</script>
