import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { IDialog } from '@jackiew/inf-ui'

describe('IDialog', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('渲染标题和正文', () => {
    const wrapper = mount(IDialog, {
      props: {
        modelValue: true,
        title: '删除确认',
        text: '确定删除当前记录吗？',
      },
      attachTo: document.body,
    })

    const dialog = document.body.querySelector('.i-dialog') as HTMLElement
    expect(dialog.textContent).toContain('删除确认')
    expect(dialog.textContent).toContain('确定删除当前记录吗？')
    wrapper.unmount()
  })

  it('点击关闭按钮时触发 update:modelValue=false', async () => {
    const wrapper = mount(IDialog, {
      props: { modelValue: true },
      attachTo: document.body,
    })

    ;(document.body.querySelector('.i-dialog__close') as HTMLElement).click()
    await nextTick()

    expect(wrapper.emitted('update:modelValue')).toEqual([[false]])
    wrapper.unmount()
  })

  it('点击遮罩可关闭；persistent 时不可关闭', async () => {
    const normal = mount(IDialog, {
      props: { modelValue: true },
      attachTo: document.body,
    })

    ;(document.body.querySelector('.i-overlay__scrim') as HTMLElement).click()
    await nextTick()
    expect(normal.emitted('update:modelValue')).toEqual([[false]])
    normal.unmount()

    const persistent = mount(IDialog, {
      props: { modelValue: true, persistent: true },
      attachTo: document.body,
    })

    ;(document.body.querySelector('.i-overlay__scrim') as HTMLElement).click()
    await nextTick()
    expect(persistent.emitted('update:modelValue')).toBeUndefined()
    persistent.unmount()
  })
})



