<script setup lang="ts">
import { useBoardsStore } from "../stores/boards";
import { StarOutline } from "@vicons/ionicons5";

const boardsStore = useBoardsStore();

const route = useRoute();
const id = route.params.id as string;

const board = computed(() => {
  return boardsStore.boards.find((board) => board.id === id);
});

const inputRef = ref<HTMLInputElement | null>(null);
const boardName = ref(board.value?.name || "");

const handleEditBoard = () => {
  if (board.value && boardName.value.trim() !== "") {
    boardsStore.updateBoard(id, boardName.value.trim());
    inputRef.value?.blur();
  }
};
</script>
<template>
  <div class="fixed top-0 left-[96px] right-0 z-10 flex-shrink">
    <n-layout-header>
      <n-space justify="space-between" align="center" class="py-4 px-6">
       
          <input
            ref="inputRef"
            v-model="boardName"
            class="w-full !border-0 text-lg focus:outline-none !bg-none focus:bg-[#edf2f7] text-[#4a5567] font-bold h-10 rounded p-5"
            @keydown.enter="handleEditBoard"
            autocomplete="off"
            placeholder="Enter board name"
          />
        
        <button class="text-2xl text-teal-400 shrink-0">
          <n-icon>
            <StarOutline />
          </n-icon>
        </button>
      </n-space>
    </n-layout-header>
  </div>
</template>



