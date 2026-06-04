<script setup lang="ts"></script>
<template>
  <IList>
    <IListItem v-for="n in 3" :key="n" :title="`Item #${n}`" />
  </IList>
</template>
