<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ShiftCalendar from "components/ShiftCalendar.vue";
import { useAuthStore } from "stores/AuthStore";

const authStore = useAuthStore();
</script>

<template>
  <div>
    <h1 class="italic">KITADE TACOS TKO ST</h1>
    <ShiftCalendar />
  </div>
</template>

<style scoped></style>
