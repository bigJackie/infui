import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { IApp, IHeader } from '@jackiew/inf-ui'
import { h } from 'vue'

const wrap = (props = {}) =>
  mount(IApp, {
    slots: {
      default: () => h(IHeader, props),
    },
  })

describe('IHeader', () => {
  it('渲染 i-header class', () => {
    const wrapper = wrap()
    expect(wrapper.find('.i-header').exists()).toBe(true)
  })

  it('默认高度注入到组件 style: --i-header-height: 64px', () => {
    const wrapper = wrap()
    expect(wrapper.find('.i-header').attributes('style')).toContain('--i-header-height: 64px')
  })

  it('自定义高度注入正确组件 CSS 变量', () => {
    const wrapper = wrap({ height: 80 })
    expect(wrapper.find('.i-header').attributes('style')).toContain('--i-header-height: 80px')
  })

  it('height prop 变化时组件 CSS 变量响应式更新', async () => {
    const wrapper = mount(IHeader, { props: { height: 64 } })
    expect(wrapper.find('.i-header').attributes('style')).toContain('--i-header-height: 64px')

    await wrapper.setProps({ height: 96 })
    expect(wrapper.find('.i-header').attributes('style')).toContain('--i-header-height: 96px')
  })

  it('height prop 变化时 inline style 同步更新', async () => {
    const wrapper = mount(IHeader, { props: { height: 64 } })

    await wrapper.setProps({ height: 96 })
    expect(wrapper.find('.i-header').attributes('style')).toContain('--i-header-height: 96px')
  })

  it('不会污染 :root CSS 变量', () => {
    document.documentElement.style.removeProperty('--i-header-height')
    wrap({ height: 64 })
    expect(document.documentElement.style.getPropertyValue('--i-header-height')).toBe('')
  })

  it('卸载组件不影响 :root CSS 变量', () => {
    const wrapper = wrap({ height: 64 })
    wrapper.unmount()
    expect(document.documentElement.style.getPropertyValue('--i-header-height')).toBe('')
  })

  it('渲染三个 slot 容器', () => {
    const wrapper = wrap()
    expect(wrapper.find('.i-header__left').exists()).toBe(true)
    expect(wrapper.find('.i-header__center').exists()).toBe(true)
    expect(wrapper.find('.i-header__right').exists()).toBe(true)
  })

  it('left slot 内容正常渲染', () => {
    const wrapper = mount(IApp, {
      slots: {
        default: () =>
          h(IHeader, null, {
            left: () => h('span', 'Logo'),
          }),
      },
    })
    expect(wrapper.find('.i-header__left').text()).toBe('Logo')
  })
})
