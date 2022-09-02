<template>
  <div
    class="errors flex flex-col text-5 text-red-500/80 text-center min-h-6 m-2"
  >
    <span v-for="error in props.errors" :key="error.$uid" class="error">
      {{ error.$message }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  errors: Object,
});
</script>
