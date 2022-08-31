<template>
  <button
    class="c-tabButton bg-grey-500/50 px-8 py-3 text-5 m-0 border-0"
    :class="{ 'bg-green-800/20': isActive }"
    @click="onTabClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const store = useDefaultStore();
const props = defineProps<{
  tabComponent: string;
}>();
const isActive = computed(() => {
  return store.activeTab === props.tabComponent;
});

function onTabClick() {
  store.changeActiveTab(props.tabComponent);
}
</script>
<style lang="scss">
.c-tabButton {
  max-height: 100%;
}
</style>
