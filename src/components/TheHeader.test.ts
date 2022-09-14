import { mount } from '@vue/test-utils'

import { describe, expect, test } from 'vitest'
import TheHeader from './TheHeader.vue'

describe('The header match snapshot', () => {
  test('The header match snapshot', () => {
    const wrapper = mount(TheHeader)
    expect(wrapper).toMatchSnapshot()
  })
})
