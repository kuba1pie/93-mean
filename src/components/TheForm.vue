<script setup lang="ts">
import useVueLidate from '@vuelidate/core'
import { email, maxLength, minLength, required } from '@vuelidate/validators'

const store = useDefaultStore()
const formData = computed(() => store.formData)
const rules = reactive({
  name: { required, minLength: minLength(5), maxLength: maxLength(50) },
  email: { required, email },
  subject: { required, maxLength: maxLength(100) },
  message: { required, maxLength: maxLength(500) },
})
const v$ = useVueLidate(rules, formData)

function setStatus(response: Response) {
  if (response.ok) {
    store.$reset()
    store.status = 'success'
    store.statusButton = 'SUCCESS'
  }
  else {
    store.status = 'error'
    store.statusButton = 'ERROR'
  }
}

async function onSubmitClick() {
  const getData = await store.postMessage()
  setStatus(getData)
}
</script>

<template>
  <form class="form flex flex-col">
    <div class="form__name">
      <label for="name">Name</label>
      <input
        v-model="formData.name"
        placeholder="Enter the name"
        name="name"
        :class="{ red: v$.name.$error }"
        @blur="v$.name.$touch"
      >
      <FormErrors :errors="v$.name.$errors" />
    </div>
    <div class="form__email">
      <label for="email">Email</label>
      <input
        v-model="formData.email"
        placeholder="Enter the email"
        name="email"
        :class="{ red: v$.email.$error }"
        @blur="v$.email.$touch"
      >
      <FormErrors :errors="v$.email.$errors" />
    </div>
    <div class="form__subject">
      <label for="input">Subject</label>
      <input
        v-model="formData.subject"
        placeholder="Enter the title"
        name="input"
        :class="{ red: v$.subject.$error }"
        @blur="v$.subject.$touch"
      >
      <FormErrors :errors="v$.subject.$errors" />
    </div>
    <div class="form__message flex-col">
      <label for="text">Message</label>
      <textarea
        v-model="formData.message"
        name="text"
        placeholder="Enter the message here..."
        class="h-50"
        :class="{ red: v$.message.$error }"
        @blur="v$.message.$touch"
      />
      <FormErrors :errors="v$.message.$errors" />
    </div>
    <div class="form__button">
      <button
        type="button"
        name="button"
        :class="{
          error: v$.$invalid || store.status === 'error',
          sending: store.status === 'sending',
          success: store.status === 'success',
          def: store.status === '',
        }"
        :disabled="v$.$invalid"
        class="button px-8 py-3 text-8 w-80 m-0 border-0"
        @click="onSubmitClick()"
      >
        {{ store.statusButton }}
      </button>
    </div>
  </form>
</template>

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
