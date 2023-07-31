<template>
  <div class="queue-window">
    <TextToSpeech></TextToSpeech>
    <DisplayLayout :tickets="tickets" :counters="counters" />
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
import TextToSpeech from "../components/TextToSpeech.vue";
import Button from "../components/Button.vue";
import DisplayLayout from "../components/DisplayLayout.vue";
import DisplayTimeAndMarquee from "../components/DisplayTimeAndMarquee.vue";
import { NOW_SERVING_ENDPOINT } from "@/config.js";
import axios from "axios";
export default {
  computed: {},
  components: {
    Button,
    DisplayLayout,
    DisplayTimeAndMarquee,
    TextToSpeech
},
  data() {
    return {
      tickets: null,
      message: null,
      counters: null,
    };
  },
  methods: {
    async fetchTickets() {
      let response = await axios.get(NOW_SERVING_ENDPOINT);
      let data = response.data;

      this.tickets = data.tickets;

      this.message = data.message;
      this.counters = data.counters;
    },
  },
  async created() {
    await this.fetchTickets();
    setInterval(this.fetchTickets, 5000); // Update every 5 seconds
  },
};
</script>
