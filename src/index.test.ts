import { createPinia, setActivePinia } from 'pinia'
import { afterEach, beforeAll, describe, expect, test } from 'vitest'
import { useDefaultStore } from './store/store'

describe('initializes', () => {
  test('works', () => {
    expect(true).toBe(true)
  })
})

describe('store tests', () => {
  let store: ReturnType<typeof useDefaultStore>

  beforeAll(() => {
    setActivePinia(createPinia())
    store = useDefaultStore()
  })

  afterEach(() => {
    store.$reset()
  })

  test('references a store', () => {
    expect(store).toBeDefined()
  })

  test('adds a coordinates', async () => {
    store.formData = {
      name: '1',
      email: '2',
      subject: '3',
      message: '4',
    }

    expect(store.formData).toStrictEqual({
      name: '1',
      email: '2',
      subject: '3',
      message: '4',
    })
  })
})
