<script setup lang="ts">
import { TrafficLight } from "@/components";

const title = "Traffic Light Effect with Vue 3 and TypeScript";
</script>

<template>
  <h1 class="text-5xl font-semibold my-8 text-sky-950">{{ title }}</h1>
  <section class="flex items-center justify-center ">
    <TrafficLight />
  </section>
</template>

<style scoped></style>
