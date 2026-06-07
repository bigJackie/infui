<script setup lang="ts">
import { computed } from 'vue'
import ISnackBar from './ISnackBar.vue'
import { getSnackBarMessages, dismissSnackBar } from './service'

const props = withDefaults(
  defineProps<{
    scope?: string
    max?: number
    gap?: number
  }>(),
  {
    scope: 'default',
    max: 1,
    gap: 56,
  },
)

const messagesForScope = getSnackBarMessages(props.scope, props.max)
const messages = computed(() => messagesForScope.value)

const closeById = (id: number) => dismissSnackBar(id, props.scope)

const onAction = (id: number, fn?: () => void) => {
  fn?.()
  closeById(id)
}
</script>

<template>
  <ISnackBar
    v-for="(item, index) in messages"
    :key="item.id"
    :model-value="true"
    :text="item.text"
    :tone="item.tone"
    :location="item.location"
    :timeout="item.timeout"
    :action-label="item.actionLabel"
    :closable="item.closable"
    :persistent="item.persistent"
    :offset="index * gap"
    @action="onAction(item.id, item.onAction)"
    @timeout="closeById(item.id)"
    @close="closeById(item.id)"
    @update:model-value="val => !val && closeById(item.id)"
  />
</template>




