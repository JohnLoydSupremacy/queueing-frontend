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

import { mapMutations } from "vuex";
import ButtonVue from "../components/Button.vue";

export default {
  name: "FormLayout",
  data() {
    return {
      section: null,
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

    getStepTextClass(step) {
      const currentIndex = this.breadcrumbSteps.findIndex(
        (breadcrumbStep) => breadcrumbStep === this.currentStep()
      );

      const stepIndex = this.breadcrumbSteps.findIndex(
        (breadcrumbStep) => breadcrumbStep === step
      );

      if (stepIndex > currentIndex) {
        return "font-medium text-gray-500";
      } else if (step === this.currentStep()) {
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
        { label: "Select Departments", section: "DepartmentSelectionPage", link: "/"},
        { label: "Select Service", section: "ServiceSelectionPage", link: "/service-selection"},
        { label: "Select User Type", section: "UserTypeSelectionPage", link: "/user-type"},
        { label: "Enter ID", section: "IDInputPage", link: "/id-input"},
        { label: "Summary", section: "AdditionalRequestsPage", link: "/additional-requests"},
        { label: "Ticket", section: "TicketDisplayPage", link: "/ticket-display"},
      ];
    },
    appSection() {
      return this.$store.getters.getSection;
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
      <nav class="flex hidden md:flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li
            v-for="(step, index) in breadcrumbSteps"
            :key="index"
            :class="breadCrumbButtonClasses[step.section]"
          >
            <RouterLink :to="step.link">
                <button
                class="flex items-center"
                :class="breadCrumbButtonClasses[step.section]"
                >
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
          </li>
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
          <ContentWrapper>
            <slot></slot>
          </ContentWrapper>
          <div class="py-2">
            <ButtonBack @click="goBack">Back</ButtonBack>
          </div>
        </div>
      </div>
    </Wrapper>
    <router-link to="/">
      <ButtonStartOver @click="clearStateAction">Reset</ButtonStartOver>
    </router-link>
  </theme-provider>
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
