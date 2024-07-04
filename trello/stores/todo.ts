import { defineStore } from 'pinia'

interface Board {
    id: string;
    title: string;
    columns: Column[];
}
export interface Column {
    id: string;
    name: string;
    tasks: Task[];
}
export interface Task {
    id: string;
    name: string;
}

const state = () => ({
    items: [],
})
const getters = {};
const actions = {};

export const useTodoStore = defineStore('todoStore', {
    state,
    actions,
    getters,
})