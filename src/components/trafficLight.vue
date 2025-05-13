<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const counter = ref<number>(0);
const intervalId = ref<number | null>(null);

const startAutoIncrement = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }

  intervalId.value = setInterval(() => {
    counter.value++;
    if (counter.value >= 60) {
      counter.value = 0;
    }
  }, 1000);
};

onMounted(() => {
  startAutoIncrement();
});

onUnmounted(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
  }
});
</script>

<template>
  <div class="flex relative">
    <div
      class="bg-black h-auto w-28 flex flex-col items-center justify-center py-4 gap-6 rounded-md"
    >
      <div
        class="w-20 h-20 rounded-full transition-colors duration-500"
        :class="
          counter <= 15
            ? 'bg-red-600 shadow-xl shadow-red-600/50'
            : 'bg-gray-900 shadow-none'
        "
      ></div>
      <div
        class="w-20 h-20 rounded-full transition-colors duration-500"
        :class="
          counter >= 16 && counter <= 35
            ? 'bg-amber-400 shadow-xl shadow-amber-400/50'
            : 'bg-gray-900 shadow-none'
        "
      ></div>
      <div
        class="w-20 h-20 rounded-full transition-colors duration-500"
        :class="
          counter > 35
            ? 'bg-green-600 shadow-xl shadow-green-600/50'
            : 'bg-gray-900 shadow-none'
        "
      ></div>
    </div>
  </div>
</template>
