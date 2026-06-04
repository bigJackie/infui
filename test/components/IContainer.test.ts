import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { IContainer } from 'inf-ui'

describe('IContainer', () => {
  it('默认渲染 i-container', () => {
    const wrapper = mount(IContainer)
    expect(wrapper.classes()).toContain('i-container')
  })

  it('vertical prop 添加 modifier', () => {
    const wrapper = mount(IContainer, { props: { vertical: true } })
    expect(wrapper.classes()).toContain('i-container--vertical')
  })

  it('app prop 添加 modifier', () => {
    const wrapper = mount(IContainer, { props: { app: true } })
    expect(wrapper.classes()).toContain('i-container--app')
  })

  it('absolute prop 添加 modifier', () => {
    const wrapper = mount(IContainer, { props: { absolute: true } })
    expect(wrapper.classes()).toContain('i-container--absolute')
  })

  it('多个 modifier 同时生效', () => {
    const wrapper = mount(IContainer, {
      props: { vertical: true, app: true },
    })
    expect(wrapper.classes()).toContain('i-container--vertical')
    expect(wrapper.classes()).toContain('i-container--app')
  })

  it('slot 内容正常渲染', () => {
    const wrapper = mount(IContainer, {
      slots: { default: '<div class="child">内容</div>' },
    })
    expect(wrapper.find('.child').exists()).toBe(true)
  })
})
