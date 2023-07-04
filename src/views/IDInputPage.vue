<script setup>
import Question from "../components/Question.vue";
import Button from "../components/Button.vue";
</script>

<template>
  <Question text="Enter your ID number" v-if="userType === 'student'" />
  <Question text="Enter your name" v-else />
  <input
    v-model="studentId"
    v-if="userType === 'student'"
    id="inputId"
    aria-describedby="inputField"
    class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-6/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Please enter your ID"
    maxlength="10"
    @input="validateInput"
  />
  <input
    v-model="studentId"
    v-else
    id="inputId"
    aria-describedby="inputField"
    class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-6/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Please enter your name"
    required
  />
  <p class="text-red-500 mt-3">{{ inputMessage }}</p>
  <p class="text-green-500 mt-3">{{ info }}</p>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-2 mt-2"
  >
    <Button @click="setStudentIdAction"> Submit </Button>
    <!-- <Button> Guest </Button>
    <Button> Guest </Button> -->
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";
import { CHECK_ID_ENDPOINT } from "../config.js";

export default {
  data() {
    return {
      studentId: "",
      userType: null,
      invalidInput: false,
      inputMessage: "",
      info: "",
    };
  },
  methods: {
    ...mapMutations(["setSection"]),
    setStudentIdAction() {
      if (this.userType == "student") {
        if (this.invalidInput === false && this.studentId !== "") {
          this.$store.commit("setStudentId", this.studentId);
          this.$router.push("/additional-requests");
        } else if (this.studentId === "") {
          this.inputMessage = "Please enter a valid student ID.";
        }
      } else {
        if (this.studentId !== "") {
          this.$store.commit("setStudentId", this.studentId);
          this.$router.push("/additional-requests");
        } else if (this.studentId === "") {
          this.inputMessage = "Please enter a valid name.";
        }
      }
    },
    validateInput() {
      const regex = /^\d+$/;
      // console.log(regex.test(this.studentId));
      if (this.studentId.length < 10 || regex.test(this.studentId)) {
        this.invalidInput = true;
        this.inputMessage = "Please enter a valid student ID.";
      } else {
        this.invalidInput = false;
        this.inputMessage = "";
      }
    },
    async checkStudentId() {
      const response = await axios.get(
        `${CHECK_ID_ENDPOINT}/${this.studentId}`
      );
      if (response.data.exists) {
        this.info = `Found an existing student: ${response.data.name}`;
      } else {
        // this.info = `Student not found in database. Please still proceed`;
      }
      // console.log(response);
    },
  },
  watch: {
    studentId: function (newStudentId, oldStudentId) {
      if (this.userType === "student") {
        this.validateInput();
        if (this.studentId.length == 10) {
          this.checkStudentId();
        } else {
          this.info = "";
        }
      }
    },
  },
  created() {
    const userType = this.$store.getters.getUserType;
    this.userType = userType;
    this.setSection("IdInput");
  },
};
</script>
