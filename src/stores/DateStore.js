import { defineStore } from "pinia";
export const useDateStore = defineStore("DateStore", {
    state: () => {
        return {
            startDate: new Date(),
        };
    },
});
//# sourceMappingURL=DateStore.js.map