import type { ComputedRef, CSSProperties } from 'vue'
import type { FormProps } from './useForm'
import { computed } from 'vue'
import { useBlock } from '../shared'

export function useFormStyle(props: FormProps) {
  const classes = computed(() => ({
    'i-form': true,
    'i-form--block': !!props.block,
    'i-form--disabled': !!props.disabled,
  }))

  const styles = useBlock(props) as ComputedRef<CSSProperties>

  return { classes, styles }
}
