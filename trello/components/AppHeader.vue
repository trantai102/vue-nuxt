<script setup lang="ts">
import { useBoardsStore } from "../stores/boards";
import { useI18n } from "vue-i18n";

const boardsStore = useBoardsStore();

const showModal = ref(false);

const datass = reactive({
  name: "",
});

const addBoard = async () => {
  boardsStore.addBoard({ id: String(Date.now()), name: datass.name });
  console.log("boardsStore:", boardsStore.boards);
  showModal.value = false;
  datass.name = "";
};

const cancelModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div class="fixed top-0 left-[96px] right-0 z-10 flex-shrink">
    <n-layout-header>
      <n-space justify="space-between" align="center" class="py-6 px-16">
        <h1 class="text-5xl font-bold">{{ $t("boards") }}</h1>
        <n-button strong secondary @click="showModal = true">
          {{ $t("addnewboard") }}
        </n-button>
      </n-space>
    </n-layout-header>
    <n-modal
      v-model:show="showModal"
      preset="card"
      title="Modal"
      :bordered="false"
      size="huge"
      class="w-2/4"
    >
      <div class="flex flex-col gap-3 items-end">
        <n-input v-model:value="datass.name" placeholder="Board Name" />
        <n-space>
          <n-button @click="cancelModal">Cancel</n-button>
          <n-button type="primary" @click="addBoard">Create</n-button>
        </n-space>
      </div>
    </n-modal>
  </div>
</template>
