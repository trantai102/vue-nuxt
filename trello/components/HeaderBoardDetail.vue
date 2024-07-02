<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useBoardsStore } from "../stores/boards";
import { StarFilled as Star } from "@element-plus/icons-vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: { Star },

  setup() {
    const route = useRoute();
    const boardsStore = useBoardsStore();
    const id = route.params.id;

    const board = computed(() => {
      return boardsStore.BoardName.find((board) => board.id === id);
    });

    return { Star, board };
  },
});
</script>

<template>
  <div class="fixed top-0 left-[96px] right-0 z-10">
    <n-layout-header>
      <n-space justify="space-between" align="center" class="py-4 px-6">
        <h1 class="text-lg font-bold"> {{ board?.name }}</h1>
        <button class="text-2xl text-teal-400 shrink-0">
          <el-icon><Star /></el-icon>
        </button>
      </n-space>
    </n-layout-header>
  </div>
</template>
