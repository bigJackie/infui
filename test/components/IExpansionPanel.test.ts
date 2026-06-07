import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { IExpansionPanel } from '@jackiew/inf-ui'

describe('IExpansionPanel', () => {
  const items = [
    { title: 'Panel A', value: 'a', content: 'Content A' },
    { title: 'Panel B', value: 'b', content: 'Content B' },
  ]

  it('renders items and expands selected panel in single mode', () => {
    const wrapper = mount(IExpansionPanel, {
      props: {
        modelValue: 'a',
        items,
      },
    })

    expect(wrapper.findAll('.i-expansion-panel__item')).toHaveLength(2)
    expect(wrapper.text()).toContain('Content A')
    expect(wrapper.text()).not.toContain('Content B')
  })

  it('toggles panel and emits value in single mode', async () => {
    const wrapper = mount(IExpansionPanel, {
      props: {
        modelValue: 'a',
        items,
      },
    })

    await wrapper.findAll('.i-expansion-panel__header')[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['b'])
    expect(wrapper.emitted('change')?.[0]).toEqual(['b'])
  })

  it('supports multiple mode', async () => {
    const wrapper = mount(IExpansionPanel, {
      props: {
        modelValue: ['a'],
        items,
        multiple: true,
      },
    })

    await wrapper.findAll('.i-expansion-panel__header')[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['a', 'b']])
  })
})

