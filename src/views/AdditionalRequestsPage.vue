<script setup>
import Question from "../components/Question.vue";
import Button from "../components/Button.vue";
</script>

<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">#</th>
          <th scope="col" class="px-6 py-3">Type</th>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Department</th>
          <th scope="col" class="px-6 py-3">Service</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(request, index) in requests"
          :key="request.studentId"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ index + 1 }}
          </th>
          <td class="px-6 py-4">{{ request.userType }}</td>
          <td class="px-6 py-4">{{ request.studentId }}</td>
          <td class="px-6 py-4">{{ request.departmentName }}</td>
          <td class="px-6 py-4">{{ request.serviceName }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <Question class="text-center" text="Do you have additional Requests?" />
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-2 mt-2"
  >
    <RouterLink to="/">
      <Button @click="submit('Yes')"> Yes </Button>
    </RouterLink>
    <RouterLink to="/ticket-display">
      <Button @click="submit('No')"> No </Button>
    </RouterLink>
    <!-- <Button> Guest </Button>
    <Button> Guest </Button> -->
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";
import { TICKETS_ENDPOINT } from "../config.js";

export default {
  created() {
    this.requests = this.$store.getters.getRequests;

    const userType = this.$store.getters.getUserType;
    const studentId = this.$store.getters.getStudentId;
    const department = this.$store.getters.getDepartment;
    const departmentName = this.$store.getters.getDepartmentName;
    const service = this.$store.getters.getService;
    const serviceName = this.$store.getters.getServiceName;

    const request = {
      userType: userType,
      studentId: studentId,
      department: department,
      departmentName: departmentName,
      service: service,
      serviceName: serviceName,
    };

    this.addRequest(request);
  },
  data() {
    return {
      requests: [],
    };
  },
  methods: {
    ...mapMutations(["addRequest", "clearState"]),

    submit(answer) {
      const requests = this.$store.getters.getRequests;

      if (answer === "Yes") {
        //
      } else {
        const requestData = {
          requests: requests,
        };

        // Make a POST request to the backend
        axios
          .post(TICKETS_ENDPOINT, requestData)
          .then(() => {
            // Reset the state properties
            this.clearState();
          })
          .catch((error) => {
            console.error("Error submitting requests:", error);
          });
      }
    },
  },
};
</script>
