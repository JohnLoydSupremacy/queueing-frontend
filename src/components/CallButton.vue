<!-- CallButton.vue -->

<template>
  <!-- Button with "Call Now" text -->
  <button @click="handleCallButtonClick">Call Now</button>
</template>

<script>
import socket from '../services/webSocket';

export default {
  name: "CallButton",
  methods: {
    handleCallButtonClick() {
      // Your logic for handling the "Call" button click goes here
      // ...

      // Emit a WebSocket event to notify the frontend that a new call record has been created
      socket.emit('new-call-record', callRecordData);
    }
  }
}
</script>
