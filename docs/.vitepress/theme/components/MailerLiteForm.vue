<template>
  <div ref="container" class="ml-embedded" :data-form="formId"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { loadMailerLite, renderMailerLiteForm } from '../utils/mailerlite'

const props = defineProps({
  formId: {
    type: String,
    required: true
  }
})

const MAX_ATTEMPTS = 8
const RETRY_BASE_DELAY = 400
const RENDER_CONFIRM_DELAY = 600

const container = ref(null)
const attempts = ref(0)

function hasRendered(target) {
  return Boolean(target?.querySelector('.ml-form-embedContainer, iframe'))
}

function scheduleRetry() {
  if (typeof window === 'undefined') return
  if (attempts.value >= MAX_ATTEMPTS) return

  const attempt = Math.max(1, attempts.value)
  window.setTimeout(() => {
    initialiseForm()
  }, RETRY_BASE_DELAY * attempt)
}

async function initialiseForm() {
  const target = container.value
  if (!target || !target.isConnected) return

  if (hasRendered(target)) {
    attempts.value = 0
    return
  }

  if (attempts.value >= MAX_ATTEMPTS) {
    console.warn(`[MailerLite] Max attempts reached for form "${props.formId}".`)
    return
  }

  attempts.value += 1

  await loadMailerLite()
  const success = await renderMailerLiteForm(props.formId)

  if (!success) {
    console.warn(`[MailerLite] Unable to render form with id "${props.formId}" (attempt ${attempts.value}).`)
    scheduleRetry()
    return
  }

  if (typeof window === 'undefined') {
    attempts.value = 0
    return
  }

    const confirmationDelay = Math.max(RENDER_CONFIRM_DELAY, RETRY_BASE_DELAY * attempts.value)
  window.setTimeout(() => {
    if (hasRendered(container.value)) {
      attempts.value = 0
    } else {
      scheduleRetry()
    }
  }, confirmationDelay)
}

onMounted(() => {
  initialiseForm()
})
</script>

<style scoped>
.ml-embedded {
  display: block;
}
</style>