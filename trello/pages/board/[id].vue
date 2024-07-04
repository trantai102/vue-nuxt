<script setup lang="ts">
import { computed, h, ref } from "vue";
import { useRoute } from "vue-router";
import { useBoardsStore } from "../../stores/boards";
import { NIcon } from "naive-ui";
import { EllipsisVerticalOutline, CloseCircleOutline, CopyOutline, TrashOutline } from "@vicons/ionicons5";
const boardsStore = useBoardsStore();

const route = useRoute();
const id = route.params.id as string;

const board = computed(() => {
  return boardsStore.boards.find((board) => board.id === id);
});
const showInput = ref(false);
const inputValue = ref("");
const columnInputValue = ref("");
const currentColumnId = ref("");

const handleAddColumn = () => {
  if (columnInputValue.value.trim() === "") {
    return;
  }
  const newColumn = {
    name: columnInputValue.value.trim(),
    tasks: [],
  };
  boardsStore.addBoardColumn(id, newColumn);
  columnInputValue.value = "";
  showInput.value = false;
};

const handleAddTask = (columnId: string) => {
  if (inputValue.value.trim() === "") {
    return;
  }
  const newTask = {
    name: inputValue.value.trim(),
  };
  boardsStore.addTaskToColumn(id, columnId, newTask);
  inputValue.value = "";
  currentColumnId.value = "";
};
function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const options = [
  {
    label: " Delete all items in column ",
    key: "1",
    icon: renderIcon(CloseCircleOutline),
  },
  {
    label: "Copy column",
    key: "2",
    icon: renderIcon(CopyOutline),
  },
  {
    label: "Delete column",
    key: "logout",
    icon: renderIcon(TrashOutline),
  },
];
</script>

<template>
  <div class="w-full ml-[96px] bg-[#f7fafc] overflow-x-auto">
    <app-header-board-detail />
    <div v-if="board" class="px-6 pt-6 mt-[64px]">
      <div class="flex flex-row gap-2">
        <div v-for="column in board.columns" :key="column.id">
          <n-infinite-scroll :distance="5" class="h-[600px]">
            <div class="min-w-[200px] md:min-w-[352px] overflow-y-auto">
              <div class="flex flex-row items-center">
                <input
                  v-model="column.name"
                  class="w-full !border-0 text-lg focus:outline-none !bg-none focus:bg-[#edf2f7] text-[#4a5567] font-bold h-10 rounded p-5"
                  @keydown.enter="handleAddColumn"
                  @blur="showInput = false"
                  autocomplete="off"
                  placeholder=""
                />
                <n-dropdown
                  placement="bottom-start"
                  trigger="click"
                  size="large"
                  :options="options"
                >
                  <n-icon>
                    <EllipsisVerticalOutline />
                  </n-icon>
                </n-dropdown>
              </div>
              <div
                class="flex h-10 w-full items-center rounded text-[#4a5567] hover:bg-[#edf2f7] focus-within:bg-[#edf2f7] my-4"
              >
                <button
                  class="p-5"
                  v-if="currentColumnId !== column.id"
                  @click="currentColumnId = column.id"
                >
                  +Add new task
                </button>
                <input
                  v-else
                  v-model="inputValue"
                  class="w-full !border-0 text-lg focus:outline-none bg-[#edf2f7] h-10 rounded p-5"
                  @keydown.enter="handleAddTask(column.id)"
                  @blur="showInput = false"
                  autocomplete="off"
                  placeholder="Enter task name"
                />
              </div>
              <div v-for="task in column.tasks" :key="task.id">
                <div
                  class="bg-white border-[#ebeef5] rounded border-solid border-[0.8px] text-[#303133] mb-6"
                >
                  <div class="p-5">
                    <p>{{ task.name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </n-infinite-scroll>
        </div>
        <div class="min-w-[200px] md:min-w-[352px]">
          <div
            class="flex h-10 w-full items-center rounded text-[#4a5567] hover:bg-[#edf2f7] focus-within:bg-[#edf2f7]"
          >
            <button class="p-5" v-if="!showInput" @click="showInput = true">
              +Add new column
            </button>
            <input
              v-else
              v-model="columnInputValue"
              class="w-full !border-0 text-lg focus:outline-none bg-[#edf2f7] h-10 rounded p-5"
              @keydown.enter="handleAddColumn"
              @blur="showInput = false"
              autocomplete="off"
              placeholder="Enter column name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
