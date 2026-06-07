import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { IMenu } from '@jackiew/inf-ui'

describe('IMenu', () => {
  const items = [
    { label: 'Edit', value: 'edit' as const },
    { label: 'Delete', value: 'delete' as const },
  ]

  it('opens and renders items', async () => {
    const wrapper = mount(IMenu, {
      props: {
        modelValue: false,
        items,
      },
    })

    await wrapper.find('.i-menu__activator').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  it('emits selected item and closes by default', async () => {
    const wrapper = mount(IMenu, {
      props: {
        modelValue: true,
        items,
        selected: null,
      },
      attachTo: document.body,
    })

    const firstItem = document.body.querySelector('.i-menu__item') as HTMLElement
    firstItem.click()
    await nextTick()
    expect(wrapper.emitted('update:selected')?.[0]).toEqual(['edit'])
    expect(wrapper.emitted('select')?.[0]?.[0]).toEqual(items[0])
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
  })

  it('auto flips upward and shifts horizontally when near viewport edge', async () => {
    const wrapper = mount(IMenu, {
      props: {
        modelValue: true,
        items,
      },
      attachTo: document.body,
    })

    Object.defineProperty(window, 'innerWidth', { value: 320, configurable: true })
    Object.defineProperty(window, 'innerHeight', { value: 240, configurable: true })

    const root = wrapper.find('.i-menu').element as HTMLElement
    const content = document.body.querySelector('.i-menu__content') as HTMLElement

    root.getBoundingClientRect = () =>
      ({
        left: 260,
        right: 300,
        top: 210,
        bottom: 230,
        width: 40,
        height: 20,
      }) as DOMRect

    content.getBoundingClientRect = () =>
      ({
        left: 260,
        right: 460,
        top: 236,
        bottom: 336,
        width: 200,
        height: 100,
      }) as DOMRect

    window.dispatchEvent(new Event('resize'))
    await nextTick()

    expect(wrapper.find('.i-menu').classes()).toContain('i-menu--up')
    expect(content.getAttribute('style')).toContain('--i-menu-left:')
    expect(content.getAttribute('style')).toContain('--i-menu-top:')
  })
})


