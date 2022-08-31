<template>
  <div class="c-theEditor flex flex-col w-200">
    <h2>Send a new message</h2>
    <form action="#" class="flex flex-col">
      <div class="form__title">
        <label for="input">Title</label>
        <input
          v-model="newMessage.title"
          placeholder="Enter the title"
          name="input"
          :class="{ error: !newMessage.title }"
        />
      </div>
      <div class="form__message flex-col">
        <label for="text">Message</label>
        <textarea
          v-model="newMessage.message"
          name="text"
          placeholder="Enter the message here..."
          :class="{ error: !newMessage.message }"
          maxlength="256"
          class="h-50"
        />
      </div>
      <div class="form__character">
        <label for="select">Character</label>
        <select
          v-model="newMessage.recipient"
          name="select"
          :class="{ error: !newMessage.recipient }"
        >
          <option value="" disabled selected hidden>Pick a character</option>
          <option
            v-for="item in store.charactersData.results"
            :key="item.id"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="form__checkbox flex flex-row justify-between">
        <label for="checkbox">Important</label>
        <input
          id="checkbox"
          v-model="newMessage.checkbox"
          type="checkbox"
          name="checkbox"
          class="checkbox w-8"
        />
      </div>
      <div class="form__button">
        <button
          type="submit"
          :class="{ 'bg-red-500/20': isDisabled }"
          :disabled="isDisabled"
          class="c-tabButton bg-green-500/20 px-8 py-3 text-8 w-80 m-0 border-0"
          @click="onSubmitClick()"
        >
          Send
        </button>
        <button
          type="submit"
          class="c-tabButton bg-grey-500/20 px-8 py-3 text-8 w-80 m-0 my-10 border-0"
          @click="store.activeTab = 'TheArchive'"
        >
          Go to Archive
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { Message } from "../types";

const store = useDefaultStore();
store.getCharacters();
let newMessage: Message = reactive({
  title: import.meta.env.VITE_MESSAGE_TITLE,
  message: import.meta.env.VITE_MESSAGE_CONTENT,
  recipient: "",
  timestamp: new Date(Date.now()),
  checkbox: false,
});
let archiveData: Message[] = [];

const isDisabled = computed(() => {
  if (
    newMessage.title === "" ||
    newMessage.message === "" ||
    newMessage.recipient === ""
  ) {
    return true;
  } else {
    return false;
  }
});

async function onSubmitClick() {
  if (window.localStorage.getItem("archiveData")) {
    archiveData = JSON.parse(window.localStorage.getItem("archiveData")!);
    newMessage.timestamp = new Date(Date.now());
    archiveData.push(newMessage);
    window.localStorage.setItem("archiveData", JSON.stringify(archiveData));
  } else {
    newMessage.timestamp = new Date(Date.now());
    archiveData.push(newMessage);
    window.localStorage.setItem("archiveData", JSON.stringify(archiveData));
  }
  newMessage.title = "";
  newMessage.message = "";
  newMessage.recipient = "";
  newMessage.checkbox = false;
}
</script>
<style lang="scss" scope>
form > div {
  display: flex;
  flex-flow: column;
  margin: 0.4em 0;

  label {
    margin-bottom: 0.3em;
  }

  input,
  textarea,
  select {
    font-size: 0.6em;
  }
}
</style>
