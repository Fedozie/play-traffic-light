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
    if (counter.value >= 145) {
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
          counter <= 45
            ? 'bg-red-600 drop-shadow-xl/25 drop-shadow-red-600'
            : 'bg-gray-900 drop-shadow-none'
        "
      ></div>
      <div
        class="w-20 h-20 rounded-full transition-colors duration-500"
        :class="
          counter >= 46 && counter <= 55
            ? 'bg-amber-400 drop-shadow-xl/25 drop-shadow-amber-400'
            : 'bg-gray-900 drop-shadow-none'
        "
      ></div>
      <div
        class="w-20 h-20 rounded-full transition-colors duration-500"
        :class="
          counter > 55
            ? 'bg-green-600 drop-shadow-xl/25 drop-shadow-green-600'
            : 'bg-gray-900 drop-shadow-none'
        "
      ></div>
    </div>
  </div>
</template>
