import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { describe, expect, it, vi } from 'vitest'
import { ITabs } from '@jackiew/inf-ui'

describe('ITabs', () => {
  const items = [
    { label: 'Overview', value: 'overview' },
    { label: 'Settings', value: 'settings' },
    { label: 'Disabled', value: 'disabled', disabled: true },
  ]

  it('renders tab items and active state', () => {
    const wrapper = mount(ITabs, {
      props: {
        modelValue: 'settings',
        items,
      },
    })

    const tabs = wrapper.findAll('.i-tabs__tab')
    expect(tabs).toHaveLength(3)
    expect(tabs[1].classes()).toContain('i-tabs__tab--active')
  })

  it('emits update:modelValue and change when selecting tab', async () => {
    const wrapper = mount(ITabs, {
      props: {
        modelValue: 'overview',
        items,
      },
    })

    await wrapper.findAll('.i-tabs__tab')[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['settings'])
    expect(wrapper.emitted('change')?.[0]).toEqual(['settings'])
  })

  it('does not emit when selecting disabled tab', async () => {
    const wrapper = mount(ITabs, {
      props: {
        modelValue: 'overview',
        items,
      },
    })

    await wrapper.findAll('.i-tabs__tab')[2].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
  })

  it('supports scroll controls in scrollable mode', async () => {
    const wrapper = mount(ITabs, {
      props: {
        modelValue: 'overview',
        items,
        scrollable: true,
      },
    })

    const scroller = wrapper.find('.i-tabs__scroller').element as HTMLElement
    let scrollLeft = 0
    const scrollBy = vi.fn(({ left }: { left: number }) => {
      scrollLeft += left
    })

    Object.defineProperty(scroller, 'scrollBy', {
      value: scrollBy,
      configurable: true,
    })
    Object.defineProperty(scroller, 'clientWidth', {
      value: 100,
      configurable: true,
    })
    Object.defineProperty(scroller, 'scrollWidth', {
      value: 320,
      configurable: true,
    })
    Object.defineProperty(scroller, 'scrollLeft', {
      configurable: true,
      get: () => scrollLeft,
    })

    window.dispatchEvent(new Event('resize'))
    await nextTick()

    expect(wrapper.find('.i-tabs__scroll-btn--next').exists()).toBe(true)
    expect(wrapper.find('.i-tabs__scroll-btn--prev').exists()).toBe(true)

    await wrapper.find('.i-tabs__scroll-btn--next').trigger('click')
    expect(scrollBy).toHaveBeenCalledWith({ left: 120, behavior: 'smooth' })
  })
})

