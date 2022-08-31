import { defineStore, storeToRefs } from "pinia";
import type { Message } from "../types";

export const useDefaultStore = defineStore("defaultStore", {
  state: () => ({
    formData: {
      name: import.meta.env.VITE_MESSAGE_NAME,
      email: import.meta.env.VITE_MESSAGE_EMAIL,
      subject: import.meta.env.VITE_MESSAGE_TITLE,
      message: import.meta.env.VITE_MESSAGE_CONTENT,
    } as Message,
    status: "" as String,
    statusButton: "SEND" as String,
    responseData: "" as String,
  }),
  actions: {
    delete() {
      for (let i = 1; i < 20; i++) {
        fetch("https://5d9f7fe94d823c0014dd323d.mockapi.io/message/" + i, {
          method: "DELETE", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }
    },
    async postMessage() {
      const data = this.formData;
      this.status = "sending";
      this.statusButton = "Sending...";

      fetch("https://5d9f7fe94d823c0014dd323d.mockapi.io/message", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            this.$reset();
            this.status = "success";
            this.statusButton = "SUCCESS";
          } else {
            this.status = "error";
            this.statusButton = "Error";
          }
        })
        .catch((error) => {
          this.responseData = error;
          this.status = "error";
          this.statusButton = "Error";
        });
    },
  },
});
