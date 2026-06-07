import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ISelect } from '@jackiew/inf-ui'

describe('ISelect', () => {
  const options = [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
  ]

  it('renders options and current value', () => {
    const wrapper = mount(ISelect, {
      props: {
        label: 'Plan',
        modelValue: 'b',
        options,
      },
    })

    expect(wrapper.find('.i-select__label').text()).toBe('Plan')
    expect((wrapper.find('select').element as HTMLSelectElement).value).toBe('b')
  })

  it('emits value updates and clear', async () => {
    const wrapper = mount(ISelect, {
      props: {
        modelValue: 'a',
        options,
        clearable: true,
      },
    })

    await wrapper.find('select').setValue('b')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['b'])
    expect(wrapper.emitted('change')?.[0]).toEqual(['b'])

    await wrapper.find('.i-select__clear').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[1]).toEqual([null])
    expect(wrapper.emitted('clear')).toHaveLength(1)
  })
})

