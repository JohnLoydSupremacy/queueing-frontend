<template>
  <div>
    <div class="marquee">
      <slot>{{ message }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarqueeDisplay",
  props: ["message"],
};
</script>

<style scoped>
.marquee {
  font-size: 3vh;
  white-space: nowrap;
  overflow: hidden;
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
