<template>
  <va-data-table :items="test">
    <template #cell(day1)="{ value }">
      <va-input v-model="hey" placeholder="11-18" />
    </template>
    <template #cell(day2)="{ value }">
      <va-input placeholder="11-18" />
    </template>
    <template #cell(day3)="{ value }">
      <va-input placeholder="11-18" />
    </template>
    <template #cell(day4)="{ value }">
      <va-input placeholder="11-18" />
    </template>
    <template #cell(day5)="{ value }">
      <va-input placeholder="11-18" />
    </template>
    <template #cell(day6)="{ value }">
      <va-input placeholder="11-18" />
    </template>
    <template #cell(day7)="{ value }">
      <va-input placeholder="11-18" />
    </template>
  </va-data-table>
</template>

<script setup>
  import { ref } from 'vue'
  const hey = ref("")
  const test = [
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
