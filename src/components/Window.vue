<template>
  <div name="blink" v-if="shouldBlink">
    <div class="blink rounded-lg">
      <div
        :style="windowStyle"
        class="window-container bg-yellow-100 shadow-lg rounded-lg p-4"
      >
        <div class="content">
          <div class="ticket-info">
            <div v-if="ticket?.counter" class="text-lg mt-2 counter">
              Counter {{ ticket.counter }}
            </div>
            <div v-if="ticket?.ticket_no" class="py-0 font-bold ticket-number">
              {{ ticket.ticket_no }}
            </div>

            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    :style="windowStyle"
    class="window-container bg-gray-100 shadow-lg rounded-lg p-4"
    v-if="!shouldBlink"
  >
    <div class="content">
      <div class="ticket-info">
        <div v-if="ticket?.counter" class="text-lg mt-2 counter">
          Counter {{ ticket.counter }}
        </div>
        <div v-if="ticket?.ticket_no" :class="ticketNumberClass">
          {{ ticket.ticket_no }}
        </div>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Window",
  props: {
    title: {
      type: String,
    },
    ticket: {
      type: Object,
    },
    px: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 19,
    },
    width: {
      type: Number,
      default: 25,
    },
    fontSize: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      shouldBlink: false,
    };
  },
  computed: {
    windowStyle() {
      return {
        padding: `${this.px}px`,
        width: `${this.width ? this.width : this.size}vh`,
        height: `${this.size}vh`,
        fontSize: `${this.fontSize}vh`,
      };
    },
    ticketNumberClass() {
      if (this.ticket?.ticket_no) {
        const firstLetter = this.ticket.ticket_no.charAt(0).toUpperCase();
        const textColorClass = this.getTextColorClass(firstLetter);
        return `py-0 font-bold ticket-number ${textColorClass}`;
      }
      return "py-0 font-bold ticket-number";
    },
  },
  methods: {
    playTextToSpeech(text) {
      const message = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(message);
    },
    getTextColorClass(firstLetter) {
      if (firstLetter === "R") {
        return "text-red-500";
      } else if (firstLetter === "C") {
        return "text-cyan-500"; 
      } else if (firstLetter === "I") {
        return "text-orange-500";
      } else if (firstLetter === "A") {
        return "text-green-500"; 
      } else {
        return "text-gray-500";
      }
    },

    startBlinking() {
      this.shouldBlink = true;
      setTimeout(() => {
        this.shouldBlink = false;
      }, 2000); // Stop blinking after 2 seconds

      // // Play text-to-speech when blinking starts
      // if (this.ticket?.ticket_no) {
      //   this.playTextToSpeech(
      //     `Now serving ticket number ${this.ticket.ticket_no}`
      //   );
      // }
    },
  },
  watch: {
    ticket(newTicket, oldTicket) {
      if (
        newTicket &&
        (!oldTicket || newTicket.ticket_no !== oldTicket.ticket_no)
      ) {
        this.startBlinking();
      }
    },
    '$store.getters.getTicketToPlay': {
      handler(newTicketToPlay) {
        if (newTicketToPlay == this.ticket.ticket_no) {
          this.startBlinking();
        }
          setTimeout(() => {
            this.$store.commit('removeTicketToPlay')
          }, 2000); // Stop blinking after 2 seconds
      }
    }
  },
};
</script>

<style scoped>
.ticket-info {
  display: flex;
  flex-wrap: wrap;
}

.counter {
  flex-basis: 100%;
}

.ticket-number {
  flex-basis: 100%;
}

.window-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.highlight-section {
  text-align: center;
}

.content {
  text-align: center;
}

.text-3xl {
  font-size: 7vh;
  line-height: 0.8;
}

.text-lg {
  font-size: 2.5vh;
}

.blink {
  background-color: rgb(255, 255, 2);
  width: 100%;
  height: 100%;
  opacity: 1;
  animation: blink-animation 0.5s alternate infinite;
}

@keyframes blink-animation {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
