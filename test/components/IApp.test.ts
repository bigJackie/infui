import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { IApp } from 'inf-ui'

describe('IApp', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('默认渲染 light 主题', () => {
    const wrapper = mount(IApp)
    expect(wrapper.classes()).toContain('i-application--light')
  })

  it('传入 dark 主题', () => {
    const wrapper = mount(IApp, { props: { theme: 'dark' } })
    expect(wrapper.classes()).toContain('i-application--dark')
  })

  it('优先读取 localStorage 的主题', () => {
    localStorage.setItem('inf-ui-theme', 'dark')
    const wrapper = mount(IApp)
    expect(wrapper.classes()).toContain('i-application--dark')
  })

  it('包含 i-application class', () => {
    const wrapper = mount(IApp)
    expect(wrapper.classes()).toContain('i-application')
  })
})
