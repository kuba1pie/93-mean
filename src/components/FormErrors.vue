<script setup lang="ts">
const props = defineProps({
  errors: Object,
})
</script>

<template>
  <div
    class="errors flex flex-col text-5 text-red-500/80 text-center min-h-6 m-2"
  >
    <span v-for="error in props.errors" :key="error.$uid" class="error">
      {{ error.$message }}
    </span>
  </div>
</template>
