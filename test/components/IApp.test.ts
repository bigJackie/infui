import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { IApp } from '@jackiew/inf-ui'

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

  it('不写入 documentElement 的 data-theme（多实例隔离）', () => {
    document.documentElement.removeAttribute('data-theme')
    mount(IApp, { props: { theme: 'dark' } })
    expect(document.documentElement.getAttribute('data-theme')).toBeNull()
  })
})
