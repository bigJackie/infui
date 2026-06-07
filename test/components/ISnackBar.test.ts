import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { ISnackBar } from '@jackiew/inf-ui'

describe('ISnackBar', () => {
  it('renders text when active', () => {
    mount(ISnackBar, {
      props: {
        modelValue: true,
        text: 'Saved successfully',
      },
      attachTo: document.body,
    })

    expect(document.body.querySelector('.i-snack-bar')?.textContent).toContain('Saved successfully')
  })

  it('emits action and closes on action click', async () => {
    const wrapper = mount(ISnackBar, {
      props: {
        modelValue: true,
        text: 'Undo delete',
        actionLabel: 'Undo',
      },
      attachTo: document.body,
    })

    ;(document.body.querySelector('.i-snack-bar__action') as HTMLElement).click()
    await nextTick()

    expect(wrapper.emitted('action')).toHaveLength(1)
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
    wrapper.unmount()
  })

  it('auto closes after timeout', async () => {
    vi.useFakeTimers()

    const wrapper = mount(ISnackBar, {
      props: {
        modelValue: true,
        text: 'Will hide',
        timeout: 500,
      },
      attachTo: document.body,
    })

    vi.advanceTimersByTime(500)
    await nextTick()

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false])
    expect(wrapper.emitted('timeout')).toHaveLength(1)

    wrapper.unmount()
    vi.useRealTimers()
  })
})

