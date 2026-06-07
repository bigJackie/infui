<script setup lang="ts">
import { provide } from 'vue'
import { useForm, type FormProps } from './useForm'
import { useFormStyle } from './useFormStyle'
import { FORM_CONTEXT_KEY, type FormContext } from './keys'

const props = withDefaults(defineProps<FormProps>(), {
  modelValue: () => ({}),
  rules: () => ({}),
  disabled: false,
  block: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: Record<string, unknown>]
  submit: [payload: { valid: boolean; model: Record<string, unknown>; errors: Record<string, string[]> }]
  validate: [payload: { valid: boolean; errors: Record<string, string[]> }]
  reset: []
}>()

const { errors, isDisabled, setFieldValue, getFieldValue, validate, onSubmit, reset } = useForm(props, emit)
const { classes, styles } = useFormStyle(props)

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  await onSubmit()
}

provide<FormContext>(FORM_CONTEXT_KEY, {
  disabled: isDisabled,
  setFieldValue,
  getFieldValue,
})

defineExpose({
  validate,
  reset,
})
</script>

<template>
  <form :class="classes" :style="styles" @submit="handleSubmit">
    <slot :errors="errors" :validate="validate" :reset="reset" />
  </form>
</template>

