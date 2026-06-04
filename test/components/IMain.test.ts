import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { IApp, IContainer, IMain } from '@jackiew/inf-ui'
import { h } from 'vue'

const wrap = () =>
  mount(IApp, {
    slots: {
      default: () =>
        h(
          IContainer,
          { app: true, vertical: true },
          {
            default: () =>
              h(IMain, null, {
                default: () => h('p', '主内容'),
              }),
          },
        ),
    },
  })

describe('IMain', () => {
  it('渲染 i-main class', () => {
    const wrapper = wrap()
    expect(wrapper.find('.i-main').exists()).toBe(true)
  })

  it('slot 内容正常渲染', () => {
    const wrapper = wrap()
    expect(wrapper.find('.i-main').text()).toBe('主内容')
  })

  it('渲染为 main 标签', () => {
    const wrapper = wrap()
    expect(wrapper.find('main').exists()).toBe(true)
  })
})
