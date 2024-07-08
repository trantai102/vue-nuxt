<script setup lang="ts">
import { defineComponent, ref, nextTick, h } from "vue";
import { storeToRefs } from "pinia";
import { useBoardsStore } from "../stores/boards";
import { StarOutline } from "@vicons/ionicons5";
import { useI18n } from "vue-i18n";
import { NIcon, useMessage, NDropdown } from "naive-ui";
import { CloseCircleOutline } from "@vicons/ionicons5";

const localePath = useLocalePath();
const { t } = useI18n();
const boardsStore = useBoardsStore();
const { boards } = storeToRefs(boardsStore);

const message = useMessage();
const showDropdownRef = ref(false);
const xRef = ref(0);
const yRef = ref(0);

const handleContextMenu = (e: MouseEvent) => {
  e.preventDefault();
  showDropdownRef.value = false;
  nextTick().then(() => {
    showDropdownRef.value = true;
    xRef.value = e.clientX;
    yRef.value = e.clientY;
  });
};

const onClickoutside = () => {
  showDropdownRef.value = false;
};

const search = ref<string | null>(null);

const options = [
  {
    label: t("deleteboard"),
    key: "delete",
    icon: renderIcon(CloseCircleOutline),
  },
];

const handleSelect = (key: string, board: any) => {
  if (key === "delete") {
    boardsStore.deleteBoard(board.id);
  }
};

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
            <nuxt-link
              v-for="board in boards"
              :key="board.id"
              :to="localePath(`/board/${board.id}`)"
            >
              <div
                class="todo-card bg-white rounded-lg shadow-sm border-[1px] border-[#eaeaea] p-6 max-w-full h-[130px] flex flex-row justify-between items-center cursor-pointer"
                @contextmenu="handleContextMenu"
              >
                <span class="text-2xl font-bold truncate">
                  {{ board.name }}
                </span>
                <button class="text-2xl text-teal-400 shrink-0">
                  <n-icon>
                    <StarOutline />
                  </n-icon>
                </button>
                <n-dropdown
                  placement="bottom-start"
                  trigger="manual"
                  :x="xRef"
                  :y="yRef"
                  :options="options"
                  :show="showDropdownRef"
                  :on-clickoutside="onClickoutside"
                  @select="(key) => handleSelect(key, board)"
                />
              </div>
            </nuxt-link>
          </div>
        </div>
      </n-infinite-scroll>
    </div>
  </div>
</template>
