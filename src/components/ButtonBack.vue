<script setup>
// import { Button } from 'flowbite-vue'
</script>

<template>
  <span>
    <button
      type="button"
      class="mt-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    >
      {{ backButtonLabel }}
    </button>
  </span>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ButtonBack",
  methods: {
    ...mapMutations(["clearState"]),
    clearStateAction() {
      this.clearState();
    },
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
    backButtonLabel() {
      return this.appSection !== "TicketDisplayPage" ? "Back" : "Start Over";
    },
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
};
</script>
