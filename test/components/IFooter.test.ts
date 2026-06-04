import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { IApp, IFooter } from '@jackiew/inf-ui'
import { h } from 'vue'

const wrap = (props = {}) =>
  mount(IApp, {
    slots: {
      default: () => h(IFooter, props),
    },
  })

describe('IFooter', () => {
  it('渲染 i-footer class', () => {
    const wrapper = wrap()
    expect(wrapper.find('.i-footer').exists()).toBe(true)
  })

  it('渲染为 footer 标签', () => {
    const wrapper = wrap()
    expect(wrapper.find('footer').exists()).toBe(true)
  })

  it('默认高度 CSS 变量 48px', () => {
    const wrapper = wrap()
    expect(wrapper.find('.i-footer').attributes('style')).toContain('--i-footer-height: 48px')
  })

  it('height prop 变化时 style 响应式更新', async () => {
    const wrapper = mount(IFooter, { props: { height: 48 } })
    expect(wrapper.find('.i-footer').attributes('style')).toContain('--i-footer-height: 48px')

    await wrapper.setProps({ height: 64 })
    expect(wrapper.find('.i-footer').attributes('style')).toContain('--i-footer-height: 64px')
  })

  it('fixed prop 添加 modifier', () => {
    const wrapper = wrap({ fixed: true })
    expect(wrapper.find('.i-footer').classes()).toContain('i-footer--fixed')
  })

  it('fixed prop 变化时 class 响应式更新', async () => {
    const wrapper = mount(IFooter, { props: { fixed: false } })
    expect(wrapper.find('.i-footer').classes()).not.toContain('i-footer--fixed')

    await wrapper.setProps({ fixed: true })
    expect(wrapper.find('.i-footer').classes()).toContain('i-footer--fixed')
  })

  it('fixed 时注入 --i-footer-height 到 :root', async () => {
    wrap({ fixed: true, height: 48 })
    expect(document.documentElement.style.getPropertyValue('--i-footer-height')).toBe('48px')
  })

  it('非 fixed 时不注入 :root CSS 变量', () => {
    document.documentElement.style.removeProperty('--i-footer-height')
    wrap({ fixed: false })
    expect(document.documentElement.style.getPropertyValue('--i-footer-height')).toBe('')
  })

  it('卸载时移除 :root CSS 变量', () => {
    const wrapper = wrap({ fixed: true })
    wrapper.unmount()
    expect(document.documentElement.style.getPropertyValue('--i-footer-height')).toBe('')
  })
})
