import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { IApp, IAside } from 'inf-ui'
import { h, nextTick } from 'vue'

// slots 类型：key → 返回 vnode 的函数
const wrap = (props = {}, slots: Record<string, () => any> = {}) =>
  mount(IApp, {
    slots: {
      default: () => h(IAside, props, slots),
    },
  })

describe('IAside', () => {
  it('默认宽度 256px CSS 变量', () => {
    const wrapper = wrap()
    expect(wrapper.find('.i-aside').attributes('style')).toContain('--i-aside-width: 256px')
  })

  it('width prop 变化时 CSS 变量响应式更新', async () => {
    const wrapper = mount(IAside, { props: { width: 256 } })
    await wrapper.setProps({ width: 320 })
    expect(wrapper.find('.i-aside').attributes('style')).toContain('--i-aside-width: 320px')
  })

  it('toggle 切换 mini 状态', async () => {
    const wrapper = wrap()
    const aside = wrapper.findComponent(IAside)
    expect(aside.vm.isMini).toBe(false)
    aside.vm.toggle()
    await nextTick()
    expect(aside.vm.isMini).toBe(true)
  })

  it('open / close 正确切换状态', async () => {
    const wrapper = wrap({ mini: true })
    const aside = wrapper.findComponent(IAside)
    aside.vm.open()
    await nextTick()
    expect(aside.vm.isMini).toBe(false)
    aside.vm.close()
    await nextTick()
    expect(aside.vm.isMini).toBe(true)
  })

  it('mini prop 变化时内部状态同步', async () => {
    const wrapper = mount(IAside, { props: { mini: false } })
    expect(wrapper.vm.isMini).toBe(false)

    await wrapper.setProps({ mini: true })
    expect(wrapper.vm.isMini).toBe(true)
  })

  it('toggle 时触发 change 事件', async () => {
    const onChange = vi.fn()
    const wrapper = mount(IApp, {
      slots: {
        default: () => h(IAside, { onChange }),
      },
    })
    wrapper.findComponent(IAside).vm.toggle()
    await nextTick()
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('toggle 时触发 update:mini 事件', async () => {
    const onUpdateMini = vi.fn()
    const wrapper = mount(IApp, {
      slots: {
        default: () => h(IAside, { 'onUpdate:mini': onUpdateMini }),
      },
    })
    wrapper.findComponent(IAside).vm.toggle()
    await nextTick()
    expect(onUpdateMini).toHaveBeenCalledWith(true)
  })

  it('float prop 添加 i-aside--float class', () => {
    const wrapper = wrap({ float: true })
    expect(wrapper.find('.i-aside').classes()).toContain('i-aside--float')
  })

  it('float prop 变化时 class 响应式更新', async () => {
    const wrapper = mount(IAside, { props: { float: false } })
    await wrapper.setProps({ float: true })
    expect(wrapper.find('.i-aside').classes()).toContain('i-aside--float')
  })

  it('mini 状态时宽度切换为 miniWidth', async () => {
    const wrapper = wrap({ width: 256, miniWidth: 64 })
    const aside = wrapper.findComponent(IAside)
    aside.vm.toggle()
    await nextTick()
    expect(wrapper.find('.i-aside').attributes('style')).toContain('--i-aside-width: 64px')
  })

  it('空 header slot 不渲染分割线', () => {
    const wrapper = wrap()
    expect(wrapper.find('.i-aside__header').exists()).toBe(false)
  })

  it('有 header slot 时渲染', () => {
    const wrapper = wrap({}, { header: () => h('div', '导航') })
    expect(wrapper.find('.i-aside__header').exists()).toBe(true)
  })
})
