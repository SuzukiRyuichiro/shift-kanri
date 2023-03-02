<template>
  <div class="flex gap-2">
    <va-input
      class="basis-1/2"
      :max-length="2"
      placeholder="入"
      v-model="start"
    />
    <va-input
      class="basis-1/2"
      :max-length="2"
      placeholder="終"
      v-model="end"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const start = ref('')
const end = ref('')
</script>
