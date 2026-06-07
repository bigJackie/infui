import type { ComputedRef } from 'vue'

export interface FormContext {
  disabled: ComputedRef<boolean>
  setFieldValue: (name: string, value: unknown) => void
  getFieldValue: (name: string) => unknown
}

export const FORM_CONTEXT_KEY = Symbol('inf-form')

