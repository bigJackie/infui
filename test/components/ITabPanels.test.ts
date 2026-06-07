import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ITabPanels } from '@jackiew/inf-ui'

describe('ITabPanels', () => {
  const items = [
    { value: 'overview' as const, content: 'Overview Content' },
    { value: 'settings' as const, content: 'Settings Content' },
  ]

  it('renders the active panel by modelValue', () => {
    const wrapper = mount(ITabPanels, {
      props: {
        modelValue: 'settings',
        items,
      },
    })

    expect(wrapper.text()).toContain('Settings Content')
    expect(wrapper.text()).not.toContain('Overview Content')
  })

  it('falls back to first panel when modelValue is undefined', () => {
    const wrapper = mount(ITabPanels, {
      props: {
        items,
      },
    })

    expect(wrapper.text()).toContain('Overview Content')
    expect(wrapper.text()).not.toContain('Settings Content')
  })

  it('renders only one panel in lazy mode', () => {
    const wrapper = mount(ITabPanels, {
      props: {
        modelValue: 'overview',
        items,
      },
    })

    expect(wrapper.findAll('.i-tab-panels__panel')).toHaveLength(1)
  })

  it('renders all panels when lazy is false', () => {
    const wrapper = mount(ITabPanels, {
      props: {
        modelValue: 'overview',
        items,
        lazy: false,
      },
    })

    expect(wrapper.findAll('.i-tab-panels__panel')).toHaveLength(2)
  })

  it('adds transition class when transition is enabled', () => {
    const wrapper = mount(ITabPanels, {
      props: {
        modelValue: 'overview',
        items,
        transition: true,
      },
    })

    expect(wrapper.classes()).toContain('i-tab-panels--with-transition')
  })

  it('keeps visited panels mounted when keepAlive is enabled', async () => {
    const wrapper = mount(ITabPanels, {
      props: {
        modelValue: 'overview',
        items,
        keepAlive: true,
      },
    })

    expect(wrapper.findAll('.i-tab-panels__panel')).toHaveLength(1)

    await wrapper.setProps({ modelValue: 'settings' })
    expect(wrapper.findAll('.i-tab-panels__panel')).toHaveLength(2)
  })
})

