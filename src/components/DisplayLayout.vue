<template>
  <div class="dynamicCenter h-screen">
    <div class="display-layout h-screen">
      <div
        class="grid1 grid-cols-4 grid-rows-2 items-end center-content gap-3 h-screen"
      >
        <div class="grid1 grid-cols4 grid-rows-2 gap-3">
          <!-- LARGE WINDOW -->
          <div
            class="now-serving col col-start-1 row-start-1"
            style="align-self: self-end"
          >
            <div
              class="highlight-section bg-blue-500 text-white py-3 px-4 rounded-t-lg relative"
            >
              <h1 class="text-xlg font-bold">Now Serving</h1>
            </div>
            <Window
              title="NOW SERVING"
              :ticket="tickets[0]"
              :size="45"
              :width="45"
              :fontSize="7"
              :class="{}"
            >
            </Window>
          </div>
          <div class="now-serving col col-start-2 row-start-1 col-end-4">
            <div style="width: 100vh">
              <VideoPlayer style="width: 100%; height: 56.25vh" />
            </div>
          </div>
          <div class="grid1 grid-cols4 grid-rows-2 gap-3">
            <div class="col col-start-2 row-start-1 col-end-4"></div>
          </div>
          <!-- BELOW THE LARGE WINDOW -->
          <div class="col col-start-1 row-start-2">
            <Window :width="45" :fontSize="7" :ticket="tickets[1]" :class="{}">
            </Window>
          </div>
          <!-- WINDOW 2 to 5 -->
          <div class="col col-start-2 row-start-2">
            <Window :ticket="tickets[2]" :class="{}"> </Window>
          </div>
          <div class="col col-start-3 row-start-2">
            <Window :ticket="tickets[3]" :class="{}"> </Window>
          </div>
          <div class="col col-start-4 row-start-2">
            <Window :ticket="tickets[4]" :class="{}"> </Window>
          </div>
          <div class="col col-start-5 row-start-4">
            <Window :ticket="tickets[5]" :class="{}"> </Window>
          </div>
        </div>
        <div class="grid1 grid-cols-1">
          <div
            class="grid1 grid-cols-1 grid-rows-3 items-end center-content gap-3"
          >
            <!-- WINDOW 6 to 8 -->
            <div class="dynamic col col-start-1 row-start-3">
              <Window :ticket="tickets[6]" :class="{}"> </Window>
            </div>
            <div class="dynamic col col-start-1 row-start-2">
              <Window :ticket="tickets[7]" :class="{}"> </Window>
            </div>
            <div class="dynamic col col-start-1 row-start-1">
              <Window :ticket="tickets[8]" :class="{}"> </Window>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Window from "../components/Window.vue";
import VideoPlayer from "../components/VideoPlayer.vue";
import startSound from "@/assets/start.mp3";
</script>

<script>
export default {
  data() {
    return {
      ticket: null,
    };
  },
  methods: {
  },
  props: ["tickets", "counters"],
  component: {
    VideoPlayer,
  },
};
</script>

<style scoped>

.display-layout {
  /* border: 0.2vh solid #000; */
  padding: 1vh;
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: min-content;
  justify-content: flex-start;
}

.grid1 {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
}

.grid-rows-2 > * {
  grid-row: span 2;
}
.dynamicCenter {
  text-align: -webkit-center;
}
.text-xlg {
  font-size: 5vh;
}

@media (min-width: 220vh) {
  .dynamic.col-start-1.row-start-3 {
    grid-row-start: 4;
    grid-column-start: 2;
  }
  .dynamic.col-start-1.row-start-2 {
    grid-row-start: 4;
    grid-column-start: 3;
  }
  .dynamic.col-start-1.row-start-1 {
    grid-row-start: 4;
    grid-column-start: 4;
  }
}
</style>
