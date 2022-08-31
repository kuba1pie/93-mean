<template>
  <form action="#" class="flex flex-col">
    <div class="form__name">
      <label for="name">Name</label>
      <input
        v-model="formData.name"
        placeholder="Enter the name"
        name="name"
        :class="{ red: v$.name.$error }"
        @blur="v$.name.$touch"
      />
      <FormErrors
        :class="{ hidden: !v$.name.$error }"
        :errors="v$.name.$errors"
      />
    </div>
    <div class="form__email">
      <label for="email">Email</label>
      <input
        v-model="formData.email"
        placeholder="Enter the email"
        name="email"
        :class="{ red: v$.email.$error }"
        @blur="v$.email.$touch"
      />
      <FormErrors
        :class="{ hidden: !v$.email.$error }"
        :errors="v$.email.$errors"
      />
    </div>
    <div class="form__subject">
      <label for="input">Subject</label>
      <input
        v-model="formData.subject"
        placeholder="Enter the title"
        name="input"
        :class="{ red: v$.subject.$error }"
        @blur="v$.subject.$touch"
      />
      <FormErrors
        :class="{ hidden: !v$.subject.$error }"
        :errors="v$.subject.$errors"
      />
    </div>
    <div class="form__message flex-col">
      <label for="text">Message</label>
      <textarea
        v-model="formData.message"
        name="text"
        placeholder="Enter the message here..."
        maxlength="256"
        class="h-50"
        :class="{ red: v$.message.$error }"
        @blur="v$.message.$touch"
      />
      <FormErrors
        :class="{ hidden: !v$.message.$error }"
        :errors="v$.message.$errors"
      />
    </div>
    <div class="form__button">
      <button
        type="submit"
        :class="{ 'bg-red-500/20': v$.$invalid }"
        :disabled="v$.$invalid"
        class="c-tabButton bg-green-500/20 px-8 py-3 text-8 w-80 m-0 border-0"
        @click="onSubmitClick()"
      >
        Send
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import useVueLidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

const store = useDefaultStore();

const formData = store.formData;

const rules = reactive({
  name: { required },
  email: { required, email },
  subject: { required },
  message: { required },
});

const v$ = useVueLidate(rules, formData);

async function onSubmitClick() {
  store.formData.subject = "";
  store.formData.message = "";
}
</script>
<style lang="scss" scope>
form > div {
  display: flex;
  flex-flow: column;

  label {
    margin-bottom: 0.3em;
  }

  input,
  textarea,
  select {
    font-size: 0.6em;
  }
  .hidden {
    visibility: hidden;
  }
}
</style>
