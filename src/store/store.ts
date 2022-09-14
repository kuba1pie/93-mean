import { defineStore } from 'pinia'
import type { Message } from '../types'

export const useDefaultStore = defineStore('defaultStore', {
  state: () => ({
    formData: {
      name: import.meta.env.VITE_MESSAGE_NAME,
      email: import.meta.env.VITE_MESSAGE_EMAIL,
      subject: import.meta.env.VITE_MESSAGE_TITLE,
      message: import.meta.env.VITE_MESSAGE_CONTENT,
    } as Message,
    status: '' as String,
    statusButton: 'SEND' as String,
    responseData: '' as String,
  }),
  actions: {
    delete(inn: number) {
      fetch(`https://5d9f7fe94d823c0014dd323d.mockapi.io/message/${inn}`, {
        method: 'DELETE', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
    },
    async postMessage() {
      const data = this.formData
      const url = 'https://5d9f7fe94d823c0014dd323d.mockapi.io/message'
      this.status = 'sending'
      this.statusButton = 'Sending...'
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data),
      })

      return response
    },
  },
})
