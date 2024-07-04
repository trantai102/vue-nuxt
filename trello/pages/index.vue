<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useBoardsStore } from "../stores/boards";
import { StarFilled as Star } from "@element-plus/icons-vue";

const boardsStore = useBoardsStore();
const { boards } = storeToRefs(boardsStore);

const value = ref<string | null>(null);
</script>

<template>
  <div class="w-full ml-[96px] bg-[#f7fafc]">
    <app-header />
    <div class="p-5 mt-24">
      <n-infinite-scroll :distance="10" class="h-[600px]">
        <div class="px-11">
          <div class="flex justify-between">
            <div>
              <h3 class="text-[#4d5869] text-[18.72px]">All Boards</h3>
            </div>
            <div>
              <n-input
                :value="value"
                type="text"
                placeholder="Filter boards"
                class=" bg-[#edf2f7] rounded-lg px-[15px] leading-10 text-[14px]"
              />
            </div>
          </div>
          <div
            class="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10"
          >
            <nuxt-link
              v-for="board in boards"
              :key="board.id"
              :to="`/board/${board.id}`"
            >
              <div
                class="todo-card bg-white rounded-lg shadow-sm border-[1px] border-[#eaeaea] p-6 max-w-full h-[130px] flex flex-row justify-between items-center cursor-pointer"
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
