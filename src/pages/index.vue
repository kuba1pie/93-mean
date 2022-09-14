<script setup lang="ts"></script>

<template>
  <div class="v-index flex flex-col text-10">
    <TheHeader />
    <main class="main flex justify-center">
      <TheEditor />
    </main>
  </div>
</template>

<style lang="scss">
@media (max-width: 1000px) {
  .text-10 {
    font-size: 1.5rem;
  }
}
</style>
