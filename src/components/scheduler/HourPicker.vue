<template>
  <div class="flex">
    <va-input :max-length="2" placeholder="11" v-model="start" />
    <va-input :max-length="2" placeholder="11" v-model="end" />
  </div>
  </template>

<script setup lang="ts">
import { ref } from "vue";

const start = ref("");
const end = ref("");
</script>
