import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ITextField } from '@jackiew/inf-ui'

describe('ITextField', () => {
  it('renders textarea and label', () => {
    const wrapper = mount(ITextField, { props: { label: 'Description', modelValue: 'Hello' } })

    expect(wrapper.find('.i-text-field__label').text()).toBe('Description')
    expect((wrapper.find('textarea').element as HTMLTextAreaElement).value).toBe('Hello')
  })

  it('emits update:modelValue and clear', async () => {
    const wrapper = mount(ITextField, { props: { modelValue: 'abc', clearable: true } })

    await wrapper.find('textarea').setValue('abcd')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['abcd'])

    await wrapper.find('.i-text-field__clear').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[1]).toEqual([''])
    expect(wrapper.emitted('clear')).toHaveLength(1)
  })
})

