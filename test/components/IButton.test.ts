import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { IButton } from '@jackiew/inf-ui'

describe('IButton', () => {
  it('renders label text by default', () => {
    const wrapper = mount(IButton, { props: { label: 'Submit' } })

    expect(wrapper.find('.i-btn').exists()).toBe(true)
    expect(wrapper.text()).toContain('Submit')
  })

  it('falls back to text when label is not provided', () => {
    const wrapper = mount(IButton, { props: { text: 'Legacy Text' } })

    expect(wrapper.text()).toContain('Legacy Text')
  })

  it('emits click when enabled and blocks click when disabled/loading', async () => {
    const wrapper = mount(IButton, { props: { label: 'Click me' } })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)

    await wrapper.setProps({ disabled: true })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)

    await wrapper.setProps({ disabled: false, loading: true })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('applies block and size styles', () => {
    const wrapper = mount(IButton, {
      props: { label: 'Block', block: true, width: 120, height: 48 },
    })

    const style = wrapper.attributes('style')
    expect(style).toContain('width: 100%')
    expect(style).toContain('height: 100%')
  })
})

