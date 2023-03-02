import { defineStore } from 'pinia'

export const useAuthStore = defineStore('AuthStore', {
  state: () => {
    return {
      currentUser: null,
    }
  },
})
