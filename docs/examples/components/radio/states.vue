<script setup lang="ts">
import { ref } from 'vue'

const stateValue = ref<'checked' | 'unchecked'>('checked')
</script>

<template>
  <div style="display: grid; gap: 8px">
    <IRadio v-model="stateValue" name="radio-state" value="checked" label="选中" />
    <IRadio v-model="stateValue" name="radio-state" value="unchecked" label="未选中" />
    <IRadio :model-value="'checked'" name="radio-state-disabled" value="checked" label="选中禁用" disabled />
    <IRadio :model-value="'checked'" name="radio-state-disabled" value="unchecked" label="未选中禁用" disabled />
  </div>
</template>

