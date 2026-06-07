import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { IRadio } from '@jackiew/inf-ui'

describe('IRadio', () => {
  it('emits selected value when unchecked', async () => {
    const wrapper = mount(IRadio, { props: { modelValue: 'a', value: 'b', label: 'B' } })

    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')).toEqual([['b']])
    expect(wrapper.emitted('change')).toEqual([['b']])
  })

  it('does not emit when already checked', async () => {
    const wrapper = mount(IRadio, { props: { modelValue: 'a', value: 'a' } })

    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })
})

