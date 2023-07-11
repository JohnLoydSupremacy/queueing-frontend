<template>
  <div class="fixed bottom-0 left-0 w-full bg-black text-white">
    <div class="flex">
      <div class="bg-gray-800 p-2">
        <DateTimeDisplay class="text-white" />
      </div>
      <div class="marquee-container items-center">
        <MarqueeDisplay :message="message" class="" />
      </div>
    </div>
  </div>
</template>

<script>
import DateTimeDisplay from "./DateTimeDisplay.vue";
import MarqueeDisplay from "./MarqueeDisplay.vue";

export default {
  components: {
    DateTimeDisplay,
    MarqueeDisplay,
  },
  props: ["message"],
};
</script>

<style scoped>
.marquee-container {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.marquee-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 100%;
  height: 100%;
  width: 200px; /* Adjust as needed */
  background-color: black; /* Set the desired background color */
  z-index: 1;
}
</style>
