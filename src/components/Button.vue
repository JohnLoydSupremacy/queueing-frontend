<template>
  <div>
    <button
      :class="[
        'w-full text-white font-medium rounded-lg text-lg px-20 py-10 focus:outline-none truncate',
        sizeClasses,
        colorClasses,
      ]"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    size: {
      type: String,
      default: "default",
      validator: (value) => ["default", "small", "large"].includes(value),
    },
    color: {
      type: String,
      default: "blue",
      validator: (value) =>
        [
          "gray",
          "red",
          "yellow",
          "green",
          "blue",
          "indigo",
          "purple",
          "pink",
          "teal",
          "cyan",
        ].includes(value),
    },
  },
  computed: {
    sizeClasses() {
      return {
        "text-sm px-6 py-3": this.size === "small",
        "text-lg px-20 py-10": this.size === "default",
        "text-xl px-24 py-12": this.size === "large",
      };
    },
    colorClasses() {
      return {
        "bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800":
          this.color === "gray",
        "bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800":
          this.color === "red",
        "bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800":
          this.color === "yellow",
        "bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800":
          this.color === "green",
        "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800":
          this.color === "blue",
        "bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800":
          this.color === "indigo",
        "bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800":
          this.color === "purple",
        "bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800":
          this.color === "pink",
        "bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800":
          this.color === "teal",
        "bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800":
          this.color === "cyan",
      };
    },
  },
};
</script>
