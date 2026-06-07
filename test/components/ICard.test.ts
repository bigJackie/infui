import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ICard } from '@jackiew/inf-ui'

describe('ICard', () => {
  it('renders title subtitle and text props', () => {
    const wrapper = mount(ICard, {
      props: {
        title: 'Card Title',
        subtitle: 'Card Subtitle',
        text: 'Card Content',
      },
    })

    expect(wrapper.find('.i-card__title').text()).toBe('Card Title')
    expect(wrapper.find('.i-card__subtitle').text()).toBe('Card Subtitle')
    expect(wrapper.find('.i-card__content').text()).toContain('Card Content')
  })

  it('renders header and footer slots', () => {
    const wrapper = mount(ICard, {
      slots: {
        header: '<div class="custom-header">Header Slot</div>',
        footer: '<div class="custom-footer">Footer Slot</div>',
      },
    })

    expect(wrapper.find('.custom-header').exists()).toBe(true)
    expect(wrapper.find('.custom-footer').exists()).toBe(true)
  })

  it('applies style modifiers and block style', () => {
    const wrapper = mount(ICard, {
      props: {
        elevated: true,
        outlined: true,
        block: true,
      },
    })

    expect(wrapper.classes()).toContain('i-card--elevated')
    expect(wrapper.classes()).toContain('i-card--outlined')
    expect(wrapper.attributes('style')).toContain('width: 100%')
    expect(wrapper.attributes('style')).toContain('height: 100%')
  })
})

