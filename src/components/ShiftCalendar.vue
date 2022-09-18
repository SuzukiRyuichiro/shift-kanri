<template>
  <va-button @click="showModal = !showModal"
    >表示する日にちを選択する</va-button
  >
  <h1>{{ startDate }}</h1>
  <va-modal v-model="showModal" message="message" title="Overview">
    <template #content="{ ok }">
      <date-picker />
      <va-button @click="ok">ok</va-button>
    </template>
  </va-modal>
  <va-data-table :items="items">
    <template #cell(day1)="{ value }">
      <hour-picker></hour-picker>
    </template>
    <template #cell(day2)="{ value }">
      <hour-picker></hour-picker>
    </template>
    <template #cell(day3)="{ value }">
      <hour-picker></hour-picker>
    </template>
    <template #cell(day4)="{ value }">
      <hour-picker></hour-picker>
    </template>
    <template #cell(day5)="{ value }">
      <hour-picker></hour-picker>
    </template>
    <template #cell(day6)="{ value }">
      <hour-picker></hour-picker>
    </template>
    <template #cell(day7)="{ value }">
      <hour-picker></hour-picker>
    </template>
  </va-data-table>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import HourPicker from "components/scheduler/HourPicker.vue";
import DatePicker from "components/scheduler/DatePicker.vue";
import { useDateStore } from "stores/DateStore";

const showModal = ref(false);
const hey = ref("");
const dateStore = useDateStore();

const { startDate } = dateStore;
const employees: Array<string> = [
  "ミナ",
  "チヅ",
  "チホ",
  "サヤカ",
  "アン",
  "ケイゴ",
  "カンタ"
];

const items = computed(() => {
  return employees.map((employee) => {
    return {
      employee: employee,
      day1: "",
      day2: "",
      day3: "",
      day4: "",
      day5: "",
      day6: "",
      day7: ""
    };
  });
});
</script>
