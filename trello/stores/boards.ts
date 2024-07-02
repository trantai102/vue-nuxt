import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBoardsStore = defineStore('boards', () => {
  const BoardName = ref([
    {
      id: '1',
      name: 'Board 1',
      columns: [
        { id: '1', name: 'Column 1', tasks: [{ id: '1', name: 'Task 1' }, { id: '2', name: 'Task 2' }] },
        { id: '2', name: 'Column 2', tasks: [{ id: '3', name: 'Task 3' }, { id: '4', name: 'Task 4' }] },
        { id: '3', name: 'Column 1', tasks: [{ id: '1', name: 'Task 1' }, { id: '2', name: 'Task 2' }] },
        { id: '4', name: 'Column 2', tasks: [{ id: '3', name: 'Task 3' }, { id: '4', name: 'Task 4' }] },
        { id: '5', name: 'Column 1', tasks: [{ id: '1', name: 'Task 1' }, { id: '2', name: 'Task 2' }] },
        { id: '6', name: 'Column 2', tasks: [{ id: '3', name: 'Task 3' }, { id: '4', name: 'Task 4' }] },
        { id: '7', name: 'Column 1', tasks: [{ id: '1', name: 'Task 1' }, { id: '2', name: 'Task 2' }] },
        { id: '8', name: 'Column 2', tasks: [{ id: '3', name: 'Task 3' }, { id: '4', name: 'Task 4' }] },
      ],
    },
    {
      id: '2',
      name: 'Board 2',
      columns: [
        { id: '3', name: 'Column A', tasks: [{ id: '5', name: 'Task A' }, { id: '6', name: 'Task B' }] },
        { id: '4', name: 'Column B', tasks: [{ id: '7', name: 'Task C' }, { id: '8', name: 'Task D' }] },
      ],
    },
  ]);
  const addBoard = (body: { id: string; name: string }) => {
    BoardName.value.push({
      ...body,
      columns: [],
    });
  };
  

  return {
    BoardName,
    addBoard,
  };
});
