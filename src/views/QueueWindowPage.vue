<template>
  <div>Queue Window</div>
  <div v-for="(button, index) in buttons" :key="button">
    <p :class="color[button]">{{ button }}</p>
    <Button @click="changeColor(button, 'text-blue-800')">Change</Button>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  components: {
    Button,
  },
  data() {
    return {
      color: { button1: "text-red-800", button2: "text-green-800" },
      buttons: ["button1", "button2"],
    };
  },
  methods: {
    changeColor(index, color) {
      console.log(index, color);
      this.color[index] = color;
    },
  },
};
</script>
