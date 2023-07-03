<script setup>
import Question from "../components/Question.vue";
import Button from "../components/Button.vue";
</script>

<template>
  <Question text="What is your ID Number?" />
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
    placeholder="Please enter your ID"
    required
  />
  <p class="text-red-500">{{ inputMessage }}</p>
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

export default {
  data() {
    return {
      studentId: "",
      userType: null,
      invalidInput: false,
      inputMessage: '',
    };
  },
  methods: {
    ...mapMutations(["setSection"]),
    setStudentIdAction() {
      if(this.invalidInput === false && this.studentId !== ''){
        this.$store.commit("setStudentId", this.studentId);
        this.$router.push("/department-select")
      }
      else if(this.studentId ===''){
        this.inputMessage = "Please enter a student ID.";
      }
    },
    validateInput(){
      const regex = /^\d+$/;
      console.log(regex.test(this.studentId))
      if(this.studentId.length < 10 || regex.test(this.studentId)){
        this.invalidInput = true;
        this.inputMessage = "Please enter a valid student ID.";
      }
      else{
        this.invalidInput = false;
        this.inputMessage = '';
      }
    },
  },
  watch: {
    studentId: function (newStudentId, oldStudentId) {
      if(this.userType === 'student'){
        this.validateInput()
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
