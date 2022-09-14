import { mount } from '@vue/test-utils'

import { describe, expect, test } from 'vitest'
import FormErrors from './FormErrors.vue'

describe('TheError component', () => {
  test('der match snapshot', () => {
    const wrapper = mount(FormErrors)
    expect(wrapper).toMatchSnapshot()
  })

  test('exsists', () => {
    const wrapper = mount(FormErrors, { propsData: { errors: [] } })
    expect(wrapper.exists()).toBe(true)
  })
  test('don\'t print error when empty errors', () => {
    const wrapper = mount(FormErrors, { propsData: { errors: [] } })
    expect(wrapper.find('span').exists()).toBe(false)
  })

  test('don\'t print error when empty errors', () => {
    const wrapper = mount(FormErrors, { propsData: { errors: [] } })
    expect(wrapper.find('span').exists()).toBe(false)
  })
  test('print error when error', () => {
    const wrapper = mount(FormErrors, { propsData: { errors: [1] } })
    expect(wrapper.find('span').exists()).toBe(true)
  })
  test('print 3 error when 3 errors', () => {
    const wrapper = mount(FormErrors, { propsData: { errors: [1, 2, 3] } })
    expect(wrapper.findAll('span').length).toBe(3)
  })
})
