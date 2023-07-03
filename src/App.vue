<script>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import ThemeProvider from "./components/ThemeProvider.vue";
import Wrapper from "./components/Wrapper.vue";
import Button from "./components/Button.vue";
import ContentWrapper from "./components/ContentWrapper.vue";
import ButtonStartOver from "./components/ButtonStartOver.vue";
import BreadCrumbs from "./components/BreadCrumbs.vue";

import { mapMutations } from "vuex";
import ButtonVue from "./components/Button.vue";

export default {
  name: "App",
  components: {
    ThemeProvider,
    Wrapper,
    Button,
    ButtonStartOver,
    BreadCrumbs,
  },
  methods: {
    ...mapMutations(["clearState"]),
    clearStateAction() {
      this.clearState();
    },
  },
};
</script>

<template>
  <theme-provider>
    <Wrapper>
      <div
        class="items-center grid grid-cols-1 md:grid-cols-3 gap-4 dark:bg-black"
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
            <RouterView />
          </ContentWrapper>
        </div>
      </div>
    </Wrapper>
    <router-link to="/">
      <ButtonStartOver @click="clearStateAction">Start Over</ButtonStartOver>
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
