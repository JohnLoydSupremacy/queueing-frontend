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
              :size="50"
              :width="45"
              :fontSize="4.3"
              :class="{ blinking: isBlinking }"
            >
            </Window>
          </div>
          <div class="now-serving col col-start-2 row-start-1 col-end-4">
            <!-- <video width="1280" controls>
              <source src="@/assets/SketchRecognition.mp4" type="video/mp4" />
              <source src="@/assets/SketchRecognition.mp4" type="video/ogg" />
              Your browser does not support the video tag.
            </video> -->
            <iframe
              width="1000"
              height="640"
              src="https://www.youtube.com/embed/SWGAPXmwhDE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div class="grid1 grid-cols4 grid-rows-2 gap-3">
            <div class="col col-start-2 row-start-1 col-end-4"></div>
          </div>
          <!-- BELOW THE LARGE WINDOW -->
          <div class="col col-start-1 row-start-2">
            <Window :width="45" :ticket="tickets[1]"> </Window>
          </div>
          <!-- WINDOW 2 to 5 -->
          <div class="col col-start-2 row-start-2">
            <Window :ticket="tickets[2]"> </Window>
          </div>
          <div class="col col-start-3 row-start-2">
            <Window :ticket="tickets[3]"> </Window>
          </div>
          <div class="col col-start-4 row-start-2">
            <Window :ticket="tickets[4]"> </Window>
          </div>
          <div class="col col-start-5 row-start-4">
            <Window :ticket="tickets[5]"> </Window>
          </div>
        </div>
        <div class="grid1 grid-cols-1">
          <div
            class="grid1 grid-cols-1 grid-rows-3 items-end center-content gap-3"
          >
            <!-- WINDOW 6 to 8 -->
            <div class="dynamic col col-start-1 row-start-3">
              <Window :ticket="tickets[6]"> </Window>
            </div>
            <div class="dynamic col col-start-1 row-start-2">
              <Window :ticket="tickets[7]"> </Window>
            </div>
            <div class="dynamic col col-start-1 row-start-1">
              <Window :ticket="tickets[8]"> </Window>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Window from "../components/Window.vue";
</script>

<script>
export default {
  data() {
    return {
      ticket: null,
      isBlinking: false,
    };
  },
  // mounted() {
  //   setInterval(() => {
  //     this.isBlinking = !this.isBlinking;
  //   }, 500); // Adjust the interval duration as desired
  // },
  mounted() {
    let blinkCount = 0; // Counter for blink instances
    const maxBlinkCount = 5; // Maximum number of blink instances
    let previousTicket = null; // Variable to store the previous ticket value

    this.$watch(
      "tickets",
      () => {
        if (
          this.tickets.length > 0 &&
          this.tickets[0]?.ticket_no !== previousTicket
        ) {
          blinkCount = 0; // Reset blink count when a new ticket is displayed
          previousTicket = this.tickets[0]?.ticket_no; // Store the current ticket value

          this.isBlinking = true; // Activate blinking
          const blinkInterval = setInterval(() => {
            this.isBlinking = !this.isBlinking; // Toggle the isBlinking variable

            blinkCount++; // Increment blink count

            if (blinkCount >= maxBlinkCount) {
              clearInterval(blinkInterval); // Stop the interval when reaching the maximum blink count
              this.isBlinking = false; // Deactivate blinking
            }
          }, 500); // Adjust the interval duration as desired
        }
      },
      { immediate: true }
    );
  },
  props: ["tickets"],
};
</script>

<style scoped>
.blinking {
  animation: blinkAnimation 1s infinite;
}

@keyframes blinkAnimation {
  0% {
    background-color: transparent;
  }
  50% {
    background-color: rgb(6, 133, 33);
  }
  100% {
    background-color: transparent;
  }
}
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

@media (min-width: 220vh) {
  @keyframes blinkAnimation {
    0% {
      background-color: transparent;
    }
    50% {
      background-color: yellow;
    }
    100% {
      background-color: transparent;
    }
  }
}
</style>
