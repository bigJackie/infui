import { mount } from '@vue/test-utils'
import { defineComponent, markRaw } from 'vue'
import { describe, expect, it } from 'vitest'
import { IIcon } from '@jackiew/inf-ui'

const FakeIcon = defineComponent({
  props: {
    size: { type: Number, required: false },
    weight: { type: String, required: false },
    color: { type: String, required: false },
  },
  template: '<svg class="fake-icon" :data-size="size" :data-weight="weight" :data-color="color" />',
})

const RawFakeIcon = markRaw(FakeIcon)

describe('IIcon', () => {
  it('maps preset size and passes visual props to icon component', () => {
    const wrapper = mount(IIcon, {
      props: {
        is: RawFakeIcon,
        size: 'lg',
        weight: 'bold',
        color: '#ff0000',
      },
    })

    const icon = wrapper.find('.fake-icon')
    expect(icon.attributes('data-size')).toBe('24')
    expect(icon.attributes('data-weight')).toBe('bold')
    expect(icon.attributes('data-color')).toBe('#ff0000')
  })

  it('supports numeric size and block mode', () => {
    const wrapper = mount(IIcon, {
      props: {
        is: RawFakeIcon,
        size: 18,
        block: true,
      },
    })

    const icon = wrapper.find('.fake-icon')
    expect(icon.attributes('data-size')).toBe('18')

    const style = wrapper.attributes('style')
    expect(style).toContain('width: 100%')
    expect(style).toContain('height: 100%')
  })
})
