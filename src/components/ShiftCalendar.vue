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
  <va-data-table :items="test">
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
import { ref } from "vue";
import HourPicker from "components/scheduler/HourPicker.vue";
import DatePicker from "components/scheduler/DatePicker.vue";
import { useDateStore } from "stores/DateStore";

const showModal = ref(false);
const hey = ref("");
const dateStore = useDateStore();

const { startDate } = dateStore;
const test: Array<object> = [
  {
    name: "ミナ",
    day1: "11-22",
    day2: "11-23",
    day3: "11-23",
    day4: "11-23",
    day5: "11-23",
    day6: "11-23",
    day7: "11-23",
  },
  {
    name: "チヅ",
    day1: "11-22",
    day2: "11-23",
    day3: "11-23",
    day4: "11-23",
    day5: "11-23",
    day6: "11-23",
    day7: "11-23",
  },
  {
    name: "チホ",
    day1: "11-22",
    day2: "11-23",
    day3: "11-23",
    day4: "11-23",
    day5: "11-23",
    day6: "11-23",
    day7: "11-23",
  },
  {
    name: "サヤカ",
    day1: "11-22",
    day2: "11-23",
    day3: "11-23",
    day4: "11-23",
    day5: "11-23",
    day6: "11-23",
    day7: "11-23",
  },
  {
    name: "アン",
    day1: "11-22",
    day2: "11-23",
    day3: "11-23",
    day4: "11-23",
    day5: "11-23",
    day6: "11-23",
    day7: "11-23",
  },
  {
    name: "ケイゴ",
    day1: "11-22",
    day2: "11-23",
    day3: "11-23",
    day4: "11-23",
    day5: "11-23",
    day6: "11-23",
    day7: "11-23",
  },
  {
    name: "カンタ",
    day1: "11-22",
    day2: "11-23",
    day3: "11-23",
    day4: "11-23",
    day5: "11-23",
    day6: "11-23",
    day7: "11-23",
  },
];
</script>
