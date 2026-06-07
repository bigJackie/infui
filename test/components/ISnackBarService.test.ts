import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import {
  ISnackBarHost,
  useSnackBarService,
  currentSnackBarMessage,
  getCurrentSnackBarMessage,
  dismissSnackBar,
  resetSnackBarServiceState,
} from '@jackiew/inf-ui'

describe('ISnackBar service', () => {
  beforeEach(() => {
    resetSnackBarServiceState()
    document.body.innerHTML = ''
  })

  it('pushes message into queue and exposes current message', () => {
    const service = useSnackBarService()
    service.show('First')

    expect(currentSnackBarMessage.value?.text).toBe('First')
  })

  it('supports typed shortcut methods', () => {
    const service = useSnackBarService()
    service.success('Done')

    expect(currentSnackBarMessage.value?.tone).toBe('success')
  })

  it('ISnackBarHost consumes queue sequentially', async () => {
    const service = useSnackBarService()
    mount(ISnackBarHost, { attachTo: document.body })

    service.show({ text: 'First', timeout: 0 })
    service.show({ text: 'Second', timeout: 0 })
    await nextTick()

    expect(document.body.textContent).toContain('First')

    dismissSnackBar()
    await nextTick()
    expect(document.body.textContent).toContain('Second')
  })

  it('isolates queues by scope', async () => {
    const left = useSnackBarService('left')
    const right = useSnackBarService('right')

    mount(ISnackBarHost, { props: { scope: 'left' }, attachTo: document.body })

    left.show({ text: 'Left message', timeout: 0 })
    right.show({ text: 'Right message', timeout: 0 })
    await nextTick()

    expect(document.body.textContent).toContain('Left message')
    expect(document.body.textContent).not.toContain('Right message')
    expect(getCurrentSnackBarMessage('right').value?.text).toBe('Right message')
  })

  it('supports stacked host with max visible messages', async () => {
    const service = useSnackBarService('stack')
    mount(ISnackBarHost, { props: { scope: 'stack', max: 2 }, attachTo: document.body })

    service.show({ text: 'First', timeout: 0 })
    service.show({ text: 'Second', timeout: 0 })
    service.show({ text: 'Third', timeout: 0 })
    await nextTick()

    expect(document.body.textContent).toContain('First')
    expect(document.body.textContent).toContain('Second')
    expect(document.body.textContent).not.toContain('Third')

    service.dismiss()
    await nextTick()

    expect(document.body.textContent).toContain('Second')
    expect(document.body.textContent).toContain('Third')
  })
})



