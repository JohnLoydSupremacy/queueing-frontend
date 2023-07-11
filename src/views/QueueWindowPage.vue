<template>
  <div class="queue-window">
    <DisplayLayout :tickets="tickets" />
    <DisplayTimeAndMarquee :message="message" />
  </div>
</template>

<style>
.queue-window {
  background-image: url("/src/assets/LPUSSSS.png");
  background-size: cover; /* Use "cover" for a wider background image */
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent; /* Set the background color to transparent */
}
</style>
<script>
import Button from "../components/Button.vue";
import DisplayLayout from "../components/DisplayLayout.vue";
// import MarqueeDisplay from "../components/MarqueeDisplay.vue";
// import DateTimeDisplay from "../components/DateTimeDisplay.vue";
import DisplayTimeAndMarquee from "../components/DisplayTimeAndMarquee.vue";
import { NOW_SERVING_ENDPOINT } from "@/config.js";
import axios from "axios";
export default {
  components: {
    Button,
    DisplayLayout,
    DisplayTimeAndMarquee,
    // MarqueeDisplay,
    // DateTimeDisplay,
  },
  data() {
    return {
      tickets: null,
      message: null,
    };
  },
  methods: {
    async fetchTickets() {
      let response = await axios.get(NOW_SERVING_ENDPOINT);
      let data = response.data;
      this.tickets = data.tickets;
      this.message = data.message;
      console.log(this.tickets);
    },
  },
  async created() {
    await this.fetchTickets();
    setInterval(this.fetchTickets, 5000); // Update every 5 seconds
  },
};
</script>
