<template>
  <va-input :max-length="5" placeholder="11-18" v-model="hey" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const hey = ref("");
</script>
