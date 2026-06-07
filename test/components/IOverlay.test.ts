import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { IOverlay } from '@jackiew/inf-ui'

describe('IOverlay', () => {
  it('modelValue=false 时不渲染遮罩', () => {
    mount(IOverlay, { props: { modelValue: false } })
    expect(document.body.querySelector('.i-overlay')).toBeNull()
  })

  it('点击遮罩时触发关闭', async () => {
    const wrapper = mount(IOverlay, {
      props: { modelValue: true },
      attachTo: document.body,
    })

    const scrim = document.body.querySelector('.i-overlay__scrim') as HTMLElement
    scrim.click()
    await nextTick()

    expect(wrapper.emitted('click:outside')).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')).toEqual([[false]])
    wrapper.unmount()
  })

  it('persistent=true 时点击遮罩不关闭', async () => {
    const wrapper = mount(IOverlay, {
      props: { modelValue: true, persistent: true },
      attachTo: document.body,
    })

    const scrim = document.body.querySelector('.i-overlay__scrim') as HTMLElement
    scrim.click()
    await nextTick()

    expect(wrapper.emitted('click:outside')).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    wrapper.unmount()
  })

  it('Esc 时触发关闭', async () => {
    const wrapper = mount(IOverlay, {
      props: { modelValue: true, closeOnEsc: true },
      attachTo: document.body,
    })

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await nextTick()

    expect(wrapper.emitted('escape')).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')).toEqual([[false]])
    wrapper.unmount()
  })
})

