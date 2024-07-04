<script setup lang="ts">
import { h } from "vue";
import { NIcon } from "naive-ui";
import {
  SearchOutline as SearchIcon,
  HomeOutline as HomeIcon,
  CardOutline as CardIcon,
  SettingsOutline as SettingsIcon,
} from "@vicons/ionicons5";

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    key: "1",
    icon: renderIcon(SearchIcon),
  },
  {
    key: "2",
    icon: renderIcon(HomeIcon),
  },
  {
    key: "3",
    icon: renderIcon(CardIcon),
  },
  {
    key: "4",
    icon: renderIcon(SettingsIcon),
  },
];
</script>

<template>
  <div class="flex fixed flex-shrink z-10">
    <n-space vertical size="large">
      <n-layout has-sider>
        <n-layout-sider
          collapse-mode="width"
          :collapsed-width="96"
          :native-scrollbar="false"
          :width="96"
          content-style="padding: 18px;"
          bordered
          class="h-screen"
        >
          <a class="text-2xl font-bold text-center mb-10 block" href="/"
            >Trello</a
          >
          <n-menu
            :collapsed-width="64"
            :collapsed-icon-size="25"
            :options="menuOptions"
            class="flex flex-col justify-center items-center"
          />
        </n-layout-sider>
      </n-layout>
    </n-space>
  </div>
</template>
