<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import AppHeaderBoardDetail from "../../components/AppHeaderBoardDetail.vue";
import { useBoardsStore } from "../../stores/boards";
export default defineComponent({
  components: { AppHeaderBoardDetail },
  setup() {
    const route = useRoute();
    const boardsStore = useBoardsStore();
    const id = route.params.id;

    const board = computed(() => {
      return boardsStore.BoardName.find((board) => board.id === id);
    });

    return { AppHeaderBoardDetail, board };
  },
});
</script>

<template>
  <div class="w-full ml-[96px] bgcolor2">
    <app-header-board-detail/>
      <div v-if="board" class="px-6 pt-6 mt-[64px]">
        <div class="flex flex-row gap-2">
          <div v-for="column in board.columns" :key="column.id">
            <div class="min-w-[352px] overflow-y-auto h-[calc(100vh-120px)] bg-red-300 h-">
              <h2>{{ column.name }}</h2>
              <div v-for="task in column.tasks" :key="task.id">
                <p>{{ task.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>