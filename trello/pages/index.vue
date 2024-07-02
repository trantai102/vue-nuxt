<script lang="ts">
import { defineComponent, ref } from "vue";
import AppHeader from "../components/AppHeader.vue";
import { storeToRefs } from "pinia";
import { useBoardsStore } from "../stores/boards";
import { StarFilled as Star } from "@element-plus/icons-vue";

export default defineComponent({
  name: "MyComponent",
  components: { AppHeader, Star },
  setup() {
    const boardsStore = useBoardsStore();
    const { BoardName } = storeToRefs(boardsStore);
    const value = ref(null);

    return { value, BoardName };
  },
});
</script>

<template>
  <div class="w-full ml-[96px] bgcolor2">
    <app-header />
    <div class="p-5">
      <n-infinite-scroll :distance="10" class="h-[600px]">
        <div class="px-11">
          <div class="flex justify-between">
            <div>
              <h3 class="color1 text-[18.72px]">All Boards</h3>
            </div>
            <div>
              <n-input
                :value="value"
                type="text"
                placeholder="Filter boards"
                class="bgcolor1 rounded-lg px-[15px] leading-10 text-[14px]"
              />
            </div>
          </div>
          <div
            class="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10"
          >
            <nuxt-link
              v-for="board in BoardName"
              :key="board.id"
              :to="`/board/${board.id}`"
            >
              <div
                class="todo-card bg-white rounded-lg shadow-sm border-[1px] border-[#eaeaea] 
                p-6 max-w-full h-[130px] flex flex-row justify-between items-center cursor-pointer"
              >
                <span class="text-2xl font-bold truncate">
                  {{ board.name }}
                </span>
                <button class="text-2xl text-teal-400 shrink-0">
                  <el-icon><Star /></el-icon>
                </button>
              </div>
            </nuxt-link>
          </div>
        </div>
      </n-infinite-scroll>
    </div>
  </div>
</template>
