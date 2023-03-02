import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', {
  state: (): DateStore => {
    return {
      // for initially empty lists
      startDate: new Date(),
    }
  },
})

interface DateStore {
  startDate: Date
}
