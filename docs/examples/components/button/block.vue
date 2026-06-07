<script setup lang="ts"></script>
<template>
  <div style="display: flex; flex-direction: column; gap: 10px">
    <div class="w-200 h-40">
      <IButton block>Block Filled</IButton>
    </div>
    <div class="w-400 h-50">
      <IButton block variant="outlined">Block Outlined</IButton>
    </div>
    <div class="w-full h-60">
      <IButton block variant="rounded">Block Rounded</IButton>
    </div>
  </div>
</template>
