<template>
  <div class="date-time">
    {{ currentDateTime }}
  </div>
</template>

<script>
export default {
  name: "DateTimeDisplay",
  data() {
    return {
      currentDateTime: null,
    };
  },
  mounted() {
    this.updateDateTime();
    setInterval(this.updateDateTime, 1000); // Update every second
  },
  methods: {
    updateDateTime() {
      const currentDate = new Date();
      this.currentDateTime = currentDate.toLocaleString();
    },
  },
};
</script>

<style scoped>
.date-time {
  font-size: 3vh;
  font-weight: bold;
  text-align: center;
}
</style>
