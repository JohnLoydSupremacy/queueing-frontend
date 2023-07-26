<template>
  <div :class="[{ dark: isDarkMode }, 'dark:bg-black']">
    <slot></slot>
    <div class="fixed top-4 right-4 z-50">
      <div>
        <ButtonFullscreen :class="{ 'bg-white': !isDarkMode, 'bg-black': isDarkMode, 'dark:text-white': isDarkMode }">
        Fullscreen
      </ButtonFullscreen>
      </div>
      <button
        class="relative w-12 h-6 rounded-full"
        @click="toggleDarkMode"
      >
      </button>
    </div>
    <div class="fixed bottom-4 right-4 z-50">
      <button
        class="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700"
        @click="toggleDarkMode"
      >
        <div
          class="absolute left-0 top-0 w-6 h-6 transition-transform duration-300 ease-in-out transform"
          :class="{ 'translate-x-6': isDarkMode }"
        >
          <div class="w-full h-full bg-white rounded-full shadow"></div>
        </div>
        <div
          class="absolute left-1 top-1 w-4 h-4 transition-transform duration-300 ease-in-out transform"
          :class="{ 'translate-x-6': isDarkMode }"
        >
          <SunIcon
            class="text-yellow-500 dark:text-gray-400"
            v-if="!isDarkMode"
          />
          <MoonIcon class="text-yellow-500 dark:text-gray-400" v-else />
        </div>
      </button>
    </div>
    <div class="fixed top-4 right-4 z-50">
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid";
import ButtonFullscreen from "./ButtonFullscreen.vue";

export default {
  name: "ThemeProvider",
  components: {
    SunIcon,
    MoonIcon,
    ButtonFullscreen
  },
  setup() {
    const isDarkMode = ref(false);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      localStorage.setItem("darkMode", isDarkMode.value.toString());
    };

    watchEffect(() => {
      const storedMode = localStorage.getItem("darkMode");
      if (storedMode !== null) {
        isDarkMode.value = storedMode === "true";
      } else {
        // If no mode is stored, set it based on user's OS preference
        isDarkMode.value = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
      }

      if (isDarkMode.value) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });

    return { isDarkMode, toggleDarkMode };
  },
};
</script>
