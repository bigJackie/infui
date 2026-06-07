import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ICheckbox } from '@jackiew/inf-ui'

describe('ICheckbox', () => {
  it('toggles value when enabled', async () => {
    const wrapper = mount(ICheckbox, { props: { modelValue: false } })

    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')).toEqual([[true]])
    expect(wrapper.emitted('change')).toEqual([[true]])
  })

  it('does not emit when disabled', async () => {
    const wrapper = mount(ICheckbox, { props: { modelValue: false, disabled: true } })

    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })
})

