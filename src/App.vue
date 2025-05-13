<script setup lang="ts">
import { TrafficLight } from "@/components";

const title = "Traffic Light Animation";
</script>

<template>
  <h1 class="text-[6rem] font-semibold my-8 text-white animate-glow -rotate-[.05rad]">{{ title }}</h1>
  <section class="flex items-center justify-center ">
    <TrafficLight />
  </section>
  <div class="fixed bottom-8 left-8">
    <button class="bg-gray-900 w-auto h-auto rounded-full p-4">Built with Vue, Typescript and Tailwind CSS</button>
  </div>
</template>

<style scoped>

</style>
