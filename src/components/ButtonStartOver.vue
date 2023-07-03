<template>
    <div>
      <button
        class="fixed bottom-4 left-4 z-50 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-10 py-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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