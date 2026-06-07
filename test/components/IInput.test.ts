import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { IInput } from '@jackiew/inf-ui'

describe('IInput', () => {
  it('renders label and current value', () => {
    const wrapper = mount(IInput, { props: { label: 'Name', modelValue: 'Jack' } })

    expect(wrapper.find('.i-input__label').text()).toBe('Name')
    expect((wrapper.find('input').element as HTMLInputElement).value).toBe('Jack')
  })

  it('emits update:modelValue on input and clear', async () => {
    const wrapper = mount(IInput, { props: { modelValue: 'abc', clearable: true } })

    await wrapper.find('input').setValue('abcd')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['abcd'])

    await wrapper.find('.i-input__clear').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[1]).toEqual([''])
    expect(wrapper.emitted('clear')).toHaveLength(1)
  })
})

