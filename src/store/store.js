import { defineStore } from "pinia";


export const useStore = defineStore('names', {
    state: () => ({
        name: '',
        email: '',
        password: '',
    })
})