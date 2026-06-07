<script setup lang="ts">
import { ref } from 'vue'

const model = ref<Record<string, unknown>>({
  name: '',
  city: null,
})

const rules = {
  name: [{ required: true, message: '请输入姓名' }],
  city: [{ required: true, message: '请选择城市' }],
}

const options = [
  { label: 'Hangzhou', value: 'hz' },
  { label: 'Shanghai', value: 'sh' },
  { label: 'Shenzhen', value: 'sz' },
]

const submitState = ref('')

const onSubmit = (payload: { valid: boolean; errors: Record<string, string[]> }) => {
  submitState.value = payload.valid ? '提交成功' : `提交失败，${JSON.stringify(payload.errors)}`
}
</script>

<template>
  <IForm v-model="model" :rules="rules" @submit="onSubmit">
    <IInput v-model="model.name" label="姓名" />

    <ISelect v-model="model.city" label="城市" :options="options" />

    <div style="display: flex; gap: 8px">
      <IButton type="submit" label="提交" />
    </div>

    <p style="margin: 0; color: var(--inf-color-text-secondary)">{{ submitState }}</p>
  </IForm>
</template>
