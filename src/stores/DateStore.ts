import { defineStore } from 'pinia';

export const useDateStore = defineStore('DateStore', {
  state: () => {
    const today = new Date();
    return {
      startDate: today,
    }
  }
});
