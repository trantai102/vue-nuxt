<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useBoardsStore } from "../stores/boards";
import { useI18n } from "vue-i18n";
import { NIcon, useMessage, NDropdown } from "naive-ui";
import {
  CloseCircleOutline,
  EllipsisHorizontalOutline,
  TrashOutline,
  StarOutline,
} from "@vicons/ionicons5";

const localePath = useLocalePath();
const { t } = useI18n();
const boardsStore = useBoardsStore();
const { boards } = storeToRefs(boardsStore);

const search = ref<string | null>(null);

const handleSelect = (key: string, board: any) => {
  if (key === "deleteboard") {
    boardsStore.deleteBoard(board.id);
  }
};

const options = [
  {
    label: t("deleteboard"),
    key: "deleteboard",
    icon: renderIcon(TrashOutline),
  },
];

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
</script>

<template>
  <div class="w-full ml-[96px] bg-[#f7fafc]">
    <app-header />
    <div class="p-5 mt-24">
      <n-infinite-scroll :distance="10" class="h-[600px]">
        <div class="px-11">
          <div class="flex justify-between">
            <div>
              <h3 class="text-[#4d5869] text-[18.72px]">
                {{ $t("allboards") }}
              </h3>
            </div>
            <div>
              <n-input
                :value="search"
                type="text"
                placeholder="Filter boards"
                class="bg-[#edf2f7] rounded-lg px-[15px] leading-10 text-[14px]"
              />
            </div>
          </div>
          <div
            class="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10"
          >
            <div v-for="board in boards" :key="board.id">
              <div
                class="todo-card group bg-white rounded-lg shadow-sm border-[1px] border-[#eaeaea] p-6 max-w-full h-[130px] flex flex-row justify-between items-center cursor-pointer"
              >
                <nuxt-link :to="localePath(`/board/${board.id}`)">
                  <span class="text-2xl font-bold truncate">
                    {{ board.name }}
                  </span>
                </nuxt-link>

                <div class="flex gap-1 items-center">
                  <n-dropdown
                    placement="bottom-start"
                    trigger="hover"
                    size="large"
                    :options="options"
                    @select="(key) => handleSelect(key, board)"
                  >
                    <n-icon class="text-2xl group-hover:block hidden">
                      <EllipsisHorizontalOutline />
                    </n-icon>
                  </n-dropdown>
                  <button class="text-2xl text-teal-400 shrink-0">
                    <n-icon>
                      <StarOutline />
                    </n-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </n-infinite-scroll>
    </div>
  </div>
</template>
