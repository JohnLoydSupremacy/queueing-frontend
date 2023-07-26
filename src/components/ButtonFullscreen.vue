<template>
  <button @click="toggleFullscreen" class="fullscreen-button">
    <ArrowsPointingOutIcon v-if="!isFullscreen" class="icon" />
    <ArrowsPointingInIcon v-else class="icon" />
  </button>
</template>

<script>
import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from "@heroicons/vue/20/solid";

export default {
  name: "ButtonFullscreen",
  components: {
    ArrowsPointingOutIcon,
    ArrowsPointingInIcon,
  },
  data() {
    return {
      isFullscreen: false,
    };
  },
  methods: {
    toggleFullscreen() {
      if (!this.isFullscreen) {
        // Enter fullscreen mode
        const docElem = document.documentElement;
        if (docElem.requestFullscreen) {
          docElem.requestFullscreen();
        } else if (docElem.mozRequestFullScreen) {
          docElem.mozRequestFullScreen();
        } else if (docElem.webkitRequestFullscreen) {
          docElem.webkitRequestFullscreen();
        } else if (docElem.msRequestFullscreen) {
          docElem.msRequestFullscreen();
        }
      } else {
        // Exit fullscreen mode
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }

      this.isFullscreen = !this.isFullscreen;
    },
  },
};
</script>

<style>
.fullscreen-button {
  padding: 4px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.icon {
  width: 32px;
  height: 32px;
  fill: currentColor;
}
</style>
