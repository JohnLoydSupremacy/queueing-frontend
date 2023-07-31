<template>
  <div></div>
</template>

<script>
import Pusher from "pusher-js";

export default {
  data() {
    return {
      ticket: null,
    };
  },
  created() {
    var pusher = new Pusher("44f8bdd58034de74550b", {
      cluster: "ap1",
    });

    var channel = pusher.subscribe("my-channel");
    channel.bind("my-event", this.handlePlayTicket); // Bind the received event to handlePlayTicket method
  },
  methods: {
    handlePlayTicket(data) {
      console.log("Playing Ticket:", data);

      // Ensure the ticket object and ticket number exist before speaking
      if (data.ticket) {
        this.$store.commit("setTicketToPlay", data.ticket);
        this.speakTicket(data.ticket); // Access the ticket number directly
      } else {
        console.log("Ticket data is missing or invalid.");
      }
    },
    speakTicket(ticket) {
      if ("speechSynthesis" in window) {
        const msg = new SpeechSynthesisUtterance();
        msg.text = `Ticket number ${ticket}`;
        speechSynthesis.speak(msg);
      } else {
        console.log("Text-to-speech is not supported in this browser.");
      }
    },
  },
  beforeDestroy() {
    // Unsubscribe from the Pusher channel when the component is destroyed
    pusher.unsubscribe("my-channel");
  },
};
</script>
