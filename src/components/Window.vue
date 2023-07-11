<template>
  <div :style="windowStyle" class="window-container">
    <div class="content flex-none">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Window",
  props: {
    px: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 23,
    },
    width: {
      type: Number,
      default: 20,
    },
  },
  computed: {
    windowStyle() {
      return {
        padding: `${this.px}px`,
        width: `${this.width ? this.width : this.size}vh`, // Set the desired width value
        height: `${this.size}vh`, // Set the desired height value
      };
    },
  },
};
</script>

<style scoped>
.window-container {
  font-size: xx-large;
  border: 0.1vh solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-align: center;
}
</style>
