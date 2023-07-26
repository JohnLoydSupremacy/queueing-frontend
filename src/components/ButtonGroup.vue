<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-2 mt-2"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Button Group",
};
</script>
