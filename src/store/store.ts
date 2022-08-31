import { defineStore } from "pinia";
import type { Message } from "../types";

export const useDefaultStore = defineStore("defaultStore", {
  state: () => ({
    charactersData: {} as Response,
    activeTab: "TheEditor" as string,
    archiveMessages: [] as Message[],
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
    changeActiveTab(name: string) {
      this.activeTab = name;
    },
    setArchive(name: Message[]) {
      this.archiveMessages = name;
    },
  },
});
