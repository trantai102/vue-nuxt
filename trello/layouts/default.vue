<script lang="ts">
import AppSiderBar from "../components/AppSiderBar.vue";
export default {
  components: {
    AppSiderBar,
  },
};
</script>
<template>
  <div class="flex">
    <app-sider-bar />
    <slot />
  </div>
</template>
<style>
</style>