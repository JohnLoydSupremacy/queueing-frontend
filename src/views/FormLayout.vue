<script>
import { RouterLink, RouterView, useRouter } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import ThemeProvider from "../components/ThemeProvider.vue";
import Wrapper from "../components/Wrapper.vue";
import Button from "../components/Button.vue";
import ContentWrapper from "../components/ContentWrapper.vue";
import ButtonStartOver from "../components/ButtonStartOver.vue";
import BreadCrumbs from "../components/BreadCrumbs.vue";
import ButtonBack from "../components/ButtonBack.vue";

import 'flowbite';
import { mapMutations } from "vuex";
import ButtonVue from "../components/Button.vue";

export default {
  name: "FormLayout",
  data() {
    return {
      section: null,
      department: null,
      breadCrumbButtonClasses: {
        DepartmentSelectionPage: "font-medium text-gray-500",
        ServiceSelectionPage: "font-medium text-gray-500",
        UserTypeSelectionPage: "font-medium text-gray-500",
        IDInputPage: "font-medium text-gray-500",
        AdditionalRequestsPage: "font-medium text-gray-500",
        TicketDisplayPage: "font-medium text-gray-500",
      },
    };
  },
  components: {
    ThemeProvider,
    Wrapper,
    Button,
    ButtonStartOver,
    BreadCrumbs,
    ButtonBack,
  },
  methods: {
    ...mapMutations(["clearState"]),
    clearStateAction() {
      this.clearState();
    },

    clearStateActionStartOver() {
      this.showModal();
      this.clearState();

      setTimeout(() => {
      this.redirectToHomePage();
      }, 5000);
    },

    showModal() {
      const modal = document.getElementById("popup-modal");
      modal.classList.remove("hidden");
    },

    redirectToHomePage(){
      this.$router.push('/');
    },

    getStepTextClass(step) {
      const currentIndex = this.breadcrumbSteps.findIndex((breadcrumbStep) => breadcrumbStep.section === this.currentStep().section);
      const stepIndex = this.breadcrumbSteps.findIndex((breadcrumbStep) => breadcrumbStep.section === step.section);

      if (stepIndex > currentIndex) {
        return "font-medium text-gray-500";
      } else if (step.section === this.currentStep().section) {
        return "font-medium text-blue-500";
      } else {
        return "font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white";
      }
    },


    currentStep() {
      const currentSection = this.section; // Replace with the actual value of the current section
      return this.breadcrumbSteps.find(
        (step) => step.section === currentSection
      );
    },

    changeClass(section, sectionClass) {
      console.log(section, sectionClass);
      this.breadCrumbButtonClasses[section] = sectionClass;
    },
  },
  watch: {
    appSection: function (newSection, oldSection) {
      this.changeClass(
        newSection,
        "font-medium text-blue-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      );
      // loop through all items in object breadCrumbCLasses and set it to gray
      const breadCrumbButtonClasses = Object.keys(this.breadCrumbButtonClasses);
      for (let page of breadCrumbButtonClasses) {
        if (page != newSection) {
          this.changeClass(page, "font-medium text-gray-500");
        }
      }
    },
  },
  created() {
    const section = this.$store.getters.getSection;
    this.section = section;
    this.changeClass(
      section,
      "font-medium text-blue-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
    );
    const departmentName = this.$store.getters.getDepartmentName;
    this.departmentName = departmentName;
  },
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.go(-1);
    };

    return {
      goBack,
    };
  },
  computed: {
    breadcrumbSteps() {
      return [
        {
          label: "Select Departments",
          section: "DepartmentSelectionPage",
          link: "/",
        },
        {
          label: "Select Service",
          section: "ServiceSelectionPage",
          link: "/service-selection",
        },
        {
          label: "Select User Type",
          section: "UserTypeSelectionPage",
          link: "/user-type",
        },
        { label: "Enter ID", section: "IDInputPage", link: "/id-input" },
        {
          label: "Summary",
          section: "AdditionalRequestsPage",
          link: "/additional-requests",
        },
        {
          label: "Ticket",
          section: "TicketDisplayPage",
          link: "/ticket-display",
        },
      ];
    },
    appSection() {
      return this.$store.getters.getSection;
    },
    showStartOverButton() {
      return this.appSection !== "TicketDisplayPage";
    },
  },
  mounted() {
    console.log(this.breadCrumbButtonClasses);
  },
};
</script>

<template>
  <theme-provider>
    <div
      class="fixed flex justify-center items-center w-full px-6 py-6 lg:px-8 z-50"
    >
    <nav class="flex  md:flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <nav v-for="(step, index) in breadcrumbSteps">
      <li :key="index" :class="breadCrumbButtonClasses[step.section]">
        <template v-if="stepIndex <= currentIndex">
          <RouterLink :to="step.link">
            <button class="flex items-center">
              <svg
                v-if="index !== 0"
                aria-hidden="true"
                class="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {{ step.label }}
            </button>
          </RouterLink>
        </template>
        <template v-else>
          <span class="flex items-center">
            <svg
              v-if="index !== 0"
              aria-hidden="true"
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {{ step.label }}
          </span>
        </template>
      </li>
    </nav>
  </ol>
</nav>



    </div>
    <Wrapper>
      <div
        class="items-center grid grid-cols-1 md:grid-cols-3 lg:gap-4 dark:bg-black"
      >
        <header class="col-span-1 flex justify-center items-center sm:mr-20">
          <router-link
            to="/"
            class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-transparent"
            ><img
              alt="LPU logo"
              class="logo"
              src="@/assets/lpu.png"
              width="250"
              height="250"
            />
          </router-link>

          <div class="flex items-center justify-center">
            <!-- <nav class="dark:text-white">
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/id-input">ID</RouterLink>
              <RouterLink to="/department-select">Department</RouterLink>
              <RouterLink to="/service-select">Service</RouterLink>
              <RouterLink to="/additional-requests"
                >Additional Request</RouterLink
              >
              <RouterLink to="/ticket-display">Ticket Display</RouterLink>
              <RouterLink to="/about">About</RouterLink>
            </nav> -->
          </div>
        </header>
        <div class="col-span-2">
          <ContentWrapper style="text-align: -webkit-center;">
            <slot></slot>
          </ContentWrapper>
          <div class="py-2">
            <ButtonBack v-if="this.appSection !== 'TicketDisplayPage'" @click="goBack"></ButtonBack>
            <!-- <router-link v-else to="/"> -->
            <ButtonBack v-else @click="clearStateActionStartOver">
            </ButtonBack>
            <!-- </router-link> -->
          </div>
        </div>
      </div>
    </Wrapper>

    <div id="popup-modal" tabindex="-1" class="fixed inline-flex justify-center items-center hidden top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-900 bg-opacity-50 dark:bg-opacity-80">
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span class="sr-only">Close modal</span>
          </button> -->
          <div class="p-6 text-center">
            <svg class="mx-auto mb-4 text-gray-400 w-16 h-16 dark:text-gray-200"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">THANK YOU, you may now go to the {{ this.departmentName }}.</h3>
          </div>
        </div>
      </div>
    </div>
    <router-link v-if="showStartOverButton" to="/">
      <ButtonStartOver @click="clearStateAction">Reset</ButtonStartOver>
    </router-link>
  </theme-provider>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
