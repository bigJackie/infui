import { computed, ref } from 'vue'

export interface FormRule {
  required?: boolean
  message?: string
  validator?: (value: unknown, model: FormModel) => boolean | string | Promise<boolean | string>
}

export type FormModel = Record<string, unknown>
export type FormRules = Record<string, FormRule[]>

export interface FormProps {
  modelValue?: FormModel
  rules?: FormRules
  disabled?: boolean
  block?: boolean
}

type FormEmit = {
  (event: 'update:modelValue', value: FormModel): void
  (event: 'submit', payload: { valid: boolean; model: FormModel; errors: Record<string, string[]> }): void
  (event: 'validate', payload: { valid: boolean; errors: Record<string, string[]> }): void
  (event: 'reset'): void
}

export function useForm(props: FormProps, emit: FormEmit) {
  const errors = ref<Record<string, string[]>>({})
  const isDisabled = computed(() => !!props.disabled)

  const model = computed<FormModel>(() => props.modelValue ?? {})

  const setFieldValue = (name: string, value: unknown) => {
    const next = { ...model.value, [name]: value }
    emit('update:modelValue', next)
  }

  const getFieldValue = (name: string) => model.value[name]

  const clearErrors = () => {
    errors.value = {}
  }

  const validate = async () => {
    const nextErrors: Record<string, string[]> = {}
    const rules = props.rules ?? {}

    for (const [field, fieldRules] of Object.entries(rules)) {
      const value = model.value[field]
      const fieldErrors: string[] = []

      for (const rule of fieldRules) {
        if (rule.required && (value === '' || value == null || value === false)) {
          fieldErrors.push(rule.message ?? `${field} is required`)
          continue
        }

        if (rule.validator) {
          const result = await rule.validator(value, model.value)
          if (result === false) {
            fieldErrors.push(rule.message ?? `${field} is invalid`)
          } else if (typeof result === 'string') {
            fieldErrors.push(result)
          }
        }
      }

      if (fieldErrors.length > 0) {
        nextErrors[field] = fieldErrors
      }
    }

    errors.value = nextErrors
    const valid = Object.keys(nextErrors).length === 0
    emit('validate', { valid, errors: nextErrors })
    return { valid, errors: nextErrors }
  }

  const onSubmit = async () => {
    const result = await validate()
    emit('submit', { valid: result.valid, model: model.value, errors: result.errors })
  }

  const reset = () => {
    emit('update:modelValue', {})
    clearErrors()
    emit('reset')
  }

  return {
    errors,
    isDisabled,
    setFieldValue,
    getFieldValue,
    clearErrors,
    validate,
    onSubmit,
    reset,
  }
}

