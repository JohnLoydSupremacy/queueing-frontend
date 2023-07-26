<template>
  <div>
    <button
      class="fixed bottom-4 left-4 z-50 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-10 py-3 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-blue-800"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonStartOver",
};
</script>
