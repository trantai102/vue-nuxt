import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Task {
  id: string;
  name: string;
}

interface Column {
  id: string;
  name: string;
  tasks: Task[];
}

interface Board {
  id: string;
  name: string;
  columns: Column[];
}

export const useBoardsStore = defineStore('boards', () => {
  const boards = ref<Board[]>([
    {
      id: '1',
      name: 'Board 1',
      columns: [
        { id: '1', name: 'Column 1', tasks: [{ id: '1', name: 'Task 1' }, { id: '2', name: 'Task 2' }] },
        { id: '2', name: 'Column 2', tasks: [{ id: '3', name: 'Task 3' }, { id: '4', name: 'Task 4' }] },
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

  const addBoard = (board: { id: string; name: string }) => {
    boards.value.push({
      ...board,
      columns: [],
    });
  };

  const addBoardColumn = (boardId: string, column: { name: string, tasks: any[] }) => {
    const board = boards.value.find((b: Board) => b.id === boardId);
    if (board) {
      board.columns.push({
        id: String(Date.now()),
        ...column,
      });
    }
  };

  const addTaskToColumn = (boardId: string, columnId: string, task: { name: string }) => {
    const board = boards.value.find(b => b.id === boardId);
    const column = board?.columns.find(c => c.id === columnId);
    if (column) {
      column.tasks.push({
        id: String(Math.random().toString(36).substring(2,9)),
        ...task,
      });
    }
  };

  const updateBoard = (boardId: string, newName: string) => {
    const board = boards.value.find(b => b.id === boardId);
    if (board) {
      board.name = newName;
    }
  };

  const deleteBoard =(boardId: string) => {
    boards.value = boards.value.filter(b => b.id!== boardId);
  };

  const deleteColumn = (boardId: string, columnId: string) => {
    const board = boards.value.find(b => b.id == boardId);
    if (board) {
      board.columns = board.columns.filter(c => c.id !== columnId);
    }
  }

  const deleteAllTasks = (boardId: string, columnId: string) => {
    const board = boards.value.find(b => b.id === boardId);
    const column = board?.columns.find(c => c.id === columnId);
    if (column) {
      column.tasks = [];
    }
  };

  return {
    boards,
    addBoard,
    addBoardColumn,
    addTaskToColumn,
    updateBoard,
    deleteBoard,
    deleteColumn,
    deleteAllTasks
  };
});
