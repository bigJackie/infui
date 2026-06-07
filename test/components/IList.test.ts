import { mount } from '@vue/test-utils'
import { h } from 'vue'
import { describe, expect, it } from 'vitest'
import { IList, IListGroup, IListItem } from '@jackiew/inf-ui'

describe('IList', () => {
  it('supports single selection toggle', async () => {
    const wrapper = mount(IList, {
      slots: {
        default: () => [
          h(IListItem, { value: 'a', title: 'A' }),
          h(IListItem, { value: 'b', title: 'B' }),
        ],
      },
    })

    const items = wrapper.findAll('.i-list-item')
    await items[0].trigger('click')
    await items[0].trigger('click')

    expect(wrapper.emitted('update:modelValue')).toEqual([["a"], [""]])
  })

  it('honors multiple + mandatory rules', async () => {
    const wrapper = mount(IList, {
      props: {
        multiple: true,
        mandatory: true,
        modelValue: ['a'],
      },
      slots: {
        default: () => [
          h(IListItem, { value: 'a', title: 'A' }),
          h(IListItem, { value: 'b', title: 'B' }),
        ],
      },
    })

    const items = wrapper.findAll('.i-list-item')
    await items[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeUndefined()

    await items[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')).toEqual([[["a", "b"]]])
  })

  it('supports singleGroup accordion behavior', async () => {
    const wrapper = mount(IList, {
      props: { singleGroup: true },
      slots: {
        default: () => [
          h(IListGroup, { title: 'Group A', defaultOpen: true }, () => h(IListItem, { value: 'a', title: 'A' })),
          h(IListGroup, { title: 'Group B' }, () => h(IListItem, { value: 'b', title: 'B' })),
        ],
      },
    })

    const headers = wrapper.findAll('.i-list-group__header')
    expect(wrapper.findAll('.i-list-group__content--open')).toHaveLength(1)

    await headers[1].trigger('click')
    const openContents = wrapper.findAll('.i-list-group__content--open')
    expect(openContents).toHaveLength(1)
    expect(openContents[0].text()).toContain('B')
  })
})

