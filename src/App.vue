<template>
  <ul>
    <li v-for="employee in employees" :key="employee.id">
      <span>{{ employee.name }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useCollection, useFirestore } from 'vuefire'
import { collection } from 'firebase/firestore'

const db = useFirestore()
const employees = useCollection(collection(db, 'employees'))
</script>
