<script setup lang="ts">
import { NIcon } from "naive-ui";
import { useI18n } from "vue-i18n";
import {
  SearchOutline as SearchIcon,
  HomeOutline as HomeIcon,
  CardOutline as CardIcon,
  SettingsOutline as SettingsIcon,
  LanguageOutline,
} from "@vicons/ionicons5";
import { useRouter } from 'vue-router';

const { setLocale, locale } = useI18n();
const router = useRouter();
const localePath = useLocalePath();

function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  { key: "1", icon: renderIcon(SearchIcon),},
  { key: "2", icon: renderIcon(HomeIcon), },
  { key: "3", icon: renderIcon(CardIcon),  },
  { key: "4", icon: renderIcon(SettingsIcon), },
];

const dropdownOptions = [
  { label: "English", key: "en" },
  { label: "Tiếng Việt", key: "vi" },
];

const handleSelect = (key: string) => {
  setLocale(key);
};


const languageButtonRef = ref();
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
          <router-link class="text-2xl font-bold text-center mb-10 block" :to="localePath('/')">Todo</router-link>
          <n-menu
            :collapsed-width="64"
            :collapsed-icon-size="25"
            :options="menuOptions"
            class="flex flex-col justify-center items-center"
          />
          <div class="flex justify-center items-center hover:bg-slate-100 p-2">
            <n-dropdown :options="dropdownOptions" @select="handleSelect">
              <button ref="languageButtonRef">
                <n-icon>
                  <LanguageOutline />
                </n-icon>
              </button>
            </n-dropdown>
          </div>
        </n-layout-sider>
      </n-layout>
    </n-space>
  </div>
</template>
