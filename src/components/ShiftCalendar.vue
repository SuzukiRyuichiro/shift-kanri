<template>
	<va-button @click="showModal = !showModal"
		>表示する日にちを選択する</va-button
	>
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
import { ref, computed } from "vue"
import HourPicker from "components/scheduler/HourPicker.vue"
import DatePicker from "components/scheduler/DatePicker.vue"
import { useDateStore } from "../stores/DateStore"
import { format } from "date-fns"

const showModal = ref(false)
const dateStore = useDateStore()

const { startDate } = dateStore
const employees: Array<string> = [
	"ミナ",
	"チヅ",
	"チホ",
	"サヤカ",
	"アン",
	"ケイゴ",
	"カンタ",
]

const headers = computed(() => {
	return [...Array(5).keys()].map((num) => {
		return format(startDate.setDate(startDate.getDate() + num), "MM/dd")
	})
})

const items = computed(() => {
	const obj = headers.value.reduce((accumulator, value) => {
		return { ...accumulator, [value]: "" }
	}, {})

	return employees.map((employee) => {
		return {
			employee: employee,
			...obj,
		}
	})
})
</script>
