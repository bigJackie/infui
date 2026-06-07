import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { IPagination } from '@jackiew/inf-ui'

describe('IPagination', () => {
  it('renders current page and page buttons', () => {
    const wrapper = mount(IPagination, {
      props: {
        modelValue: 2,
        total: 100,
        pageSize: 10,
      },
    })

    expect(wrapper.text()).toContain('2 / 10')
    expect(wrapper.findAll('.i-pagination__page').length).toBeGreaterThan(0)
  })

  it('emits change when switching page', async () => {
    const wrapper = mount(IPagination, {
      props: {
        modelValue: 1,
        total: 30,
        pageSize: 10,
      },
    })

    await wrapper.findAll('.i-pagination__page')[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
    expect(wrapper.emitted('change')?.[0]).toEqual([2])
  })

  it('supports prev/next navigation', async () => {
    const wrapper = mount(IPagination, {
      props: {
        modelValue: 2,
        total: 30,
        pageSize: 10,
      },
    })

    const navButtons = wrapper.findAll('.i-pagination__nav')
    await navButtons[0].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([1])

    await navButtons[1].trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[1]).toEqual([3])
  })
})

