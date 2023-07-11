<template>
  <div>Queue Window</div>
  <DisplayLayout :tickets="tickets"/>

  <!-- <div v-for="(button, index) in buttons" :key="button">
    <p :class="color[button]">{{ button }}</p>
    <Button @click="changeColor(button, 'text-blue-800')">Change</Button>
  </div> -->
  
</template>

<script>
import Button from "../components/Button.vue";
import DisplayLayout from "../components/DisplayLayout.vue";
import { NOW_SERVING_ENDPOINT } from '@/config.js'
import axios from 'axios'
export default {
  components: {
    Button,
    DisplayLayout,
  },
  data() {
    return {
      color: { button1: "text-red-800", button2: "text-green-800" },
      buttons: ["button1", "button2"],
      tickets: null
    };
  },
  methods: {
    
    changeColor(index, color) {
      console.log(index, color);
      this.color[index] = color;
    },

    async fetchTickets() {
      let response = await axios.get(NOW_SERVING_ENDPOINT)
      let data = response.data
      this.tickets = data
      console.log(this.tickets)
    }
  },
  async created() {
    await this.fetchTickets()
  }
};
</script>
