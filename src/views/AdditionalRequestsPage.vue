<script setup>
import Question from "../components/Question.vue";
import Button from "../components/Button.vue";
import FormLayout from "../views/FormLayout.vue"
</script>

<template>
  <FormLayout>
    <div class="relative overflow-x-auto">
      <Question
        class="text-center mb-3"
        text="Do you have additional requests?"
      />
      <table
        class="w-full mb-3 text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">#</th>
            <th scope="col" class="px-6 py-3">Type</th>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Department</th>
            <th scope="col" class="px-6 py-3">Service</th>
            <th scope="col" class="px-6 py-3"></th>
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
            <td class="px-6 py-4">
              <button class="px-3 py-3 hover:bg-gray-600 rounded-lg">
                <svg
                  class="w-[22px] h-[22px] text-red-500 dark:text-red"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                  @click="removeRequest(request.id)"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-2 mt-2"
    >
      <RouterLink to="/">
        <Button color="gray" @click="submit('Yes')">
          Yes, I want to add more
        </Button>
      </RouterLink>
      <Button @click="submit('No')"> Finish </Button>
      <!-- <Button> Guest </Button>
      <Button> Guest </Button> -->
    </div>
  </FormLayout>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";
import { TICKETS_ENDPOINT } from "../config.js";

export default {
  created() {
    this.setSection("AdditionalRequestsPage");

    this.requests = this.$store.getters.getRequests;

    const userType = this.$store.getters.getUserType;
    const studentId = this.$store.getters.getStudentId;
    const department = this.$store.getters.getDepartment;
    const departmentName = this.$store.getters.getDepartmentName;
    const service = this.$store.getters.getService;
    const serviceName = this.$store.getters.getServiceName;

    const request = {
      id: this.requests.length,
      userType: userType,
      studentId: studentId,
      department: department,
      departmentName: departmentName,
      service: service,
      serviceName: serviceName,
    };

    if (
      userType != null &&
      studentId != null &&
      department != null &&
      service != null
    ) {
      this.addRequest(request);
      console.log("Added requests");
    }
  },
  data() {
    return {
      requests: [],
    };
  },
  methods: {
    ...mapMutations(["addRequest", "removeRequest", "setTicket", "setSection"]),

    submit(answer) {
      const requests = this.$store.getters.getRequests;

      if (answer === "Yes") {
        //
      } else {
        const requestData = requests;

        // Make a POST request to the backend
        axios
          .post(TICKETS_ENDPOINT, requestData)
          .then((response) => {
            this.setTicket(response.data.ticket);
            this.$router.push("/ticket-display");
          })
          .catch((error) => {
            console.error("Error submitting requests:", error);
          });
      }
    },
  },
};
</script>
