<template>
  <ClientOnly>
    <div ref="container" class="ml-embedded" :data-form="formId"></div>
  </ClientOnly>
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

const container = ref(null)
const attempts = ref(0)

async function initialiseForm() {
  if (!container.value) return
  const target = container.value
  if (!target.isConnected) return

  if (target.querySelector('iframe')) {
    return
  }

  if (attempts.value > 5) {
    return
  }

  attempts.value += 1
  await loadMailerLite()
  const success = await renderMailerLiteForm(props.formId)
  if (!success) {
    if (typeof window !== 'undefined' && attempts.value <= 5) {
      window.setTimeout(() => {
        initialiseForm()
      }, 500 * attempts.value)
    }
    console.warn(`[MailerLite] Unable to render form with id "${props.formId}".`)
  } else {
    attempts.value = 0
  }
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