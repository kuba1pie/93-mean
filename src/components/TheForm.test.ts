import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { afterEach, beforeAll, describe, expect, test } from 'vitest'
import TheForm from './TheForm.vue'
const app = createApp({})

describe('TheForm', () => {
  let store: ReturnType<typeof useDefaultStore>

  beforeAll(() => {
    setActivePinia(createPinia())
    const pinia = createPinia()
    app.use(pinia)
    store = useDefaultStore()
  })

  afterEach(() => {
    store.$reset()
  })

  test('exsists', () => {
    const wrapper = mount(TheForm)
    expect(wrapper.exists()).toBe(true)
  })
  test('renders correct component', () => {
    const wrapper = mount(TheForm)
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['form']))
  })
  test('button is disabled', async () => {
    const wrapper = mount(TheForm)
    expect(wrapper.find('button').attributes('disabled')).toBe('')
  })
  test('button is valid on sending', async () => {
    store.status = 'sending'
    store.statusButton = 'Sending...'
    const wrapper = mount(TheForm)
    expect(wrapper.find('button').text()).toBe('Sending...')
    expect(wrapper.find('button').classes('sending')).toBe(true)
  })
  test('button is valid on success', async () => {
    store.status = 'success'
    store.statusButton = 'SUCCESS'
    const wrapper = mount(TheForm)
    expect(wrapper.find('button').text()).toBe('SUCCESS')
    expect(wrapper.find('button').classes('success')).toBe(true)
  })
  test('button is valid on error', async () => {
    store.status = 'error'
    store.statusButton = 'Error'
    const wrapper = mount(TheForm)
    expect(wrapper.find('button').text()).toBe('Error')
    expect(wrapper.find('button').classes('error')).toBe(true)
  })
  test('button is valid on error', async () => {
    store.status = 'error'
    store.statusButton = 'Error'
    const wrapper = mount(TheForm)
    expect(wrapper.find('button').text()).toBe('Error')
  })
})
