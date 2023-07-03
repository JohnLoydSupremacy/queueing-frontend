<template>
  <div>
    <p class="text-4xl font-bold text-gray-900 dark:text-white">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    text: String,
  },
};
</script>
