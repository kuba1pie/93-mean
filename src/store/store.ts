import { defineStore } from "pinia";
import type { Message } from "../types";

export const useDefaultStore = defineStore("defaultStore", {
  state: () => ({
    charactersData: {} as Response,
    formData: {
      name: "",
      email: "",
      subject: import.meta.env.VITE_MESSAGE_TITLE,
      message: import.meta.env.VITE_MESSAGE_CONTENT,
    } as Message,
  }),
  actions: {
    async getCharacters() {
      const url = "https://rickandmortyapi.com/api/character";
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.charactersData = data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
});
