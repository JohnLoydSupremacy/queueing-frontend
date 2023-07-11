<template>
  <div
    :style="windowStyle"
    class="window-container bg-gray-100 shadow-lg rounded-lg p-4"
  >
    <div class="content">
      <!-- <h2 class="text-2xl font-bold">{{ title }}</h2> -->
      <div v-if="ticket?.counter" class="text-lg mt-2">
        Counter {{ ticket.counter }}
      </div>
      <div v-if="ticket?.ticket_no" class="text-3xl mt-4 font-bold">
        {{ ticket.ticket_no }}
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
      default: 2.6,
    },
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
  },
};
</script>

<style scoped>
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
</style>
