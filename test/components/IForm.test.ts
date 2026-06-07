import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { h } from 'vue'
import { IForm } from '@jackiew/inf-ui'

describe('IForm', () => {
  it('validates required rules on submit', async () => {
    const wrapper = mount(IForm, {
      props: {
        modelValue: { name: '' },
        rules: {
          name: [{ required: true, message: 'name required' }],
        },
      },
      slots: {
        default: () => h('button', { type: 'submit' }, 'Submit'),
      },
    })

    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('validate')?.[0]?.[0]).toEqual({
      valid: false,
      errors: { name: ['name required'] },
    })
    expect(wrapper.emitted('submit')?.[0]?.[0]?.valid).toBe(false)
  })

  it('can pass validation for valid model', async () => {
    const wrapper = mount(IForm, {
      props: {
        modelValue: { name: 'jack' },
        rules: {
          name: [{ required: true, message: 'name required' }],
        },
      },
      slots: {
        default: () => h('button', { type: 'submit' }, 'Submit'),
      },
    })

    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('validate')?.[0]?.[0]).toEqual({
      valid: true,
      errors: {},
    })
    expect(wrapper.emitted('submit')?.[0]?.[0]?.valid).toBe(true)
  })
})

