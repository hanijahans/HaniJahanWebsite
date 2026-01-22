<script setup lang="ts">
import { computed } from 'vue'
import PortfolioGrid from './PortfolioGrid.vue'
import type { PortfolioItem } from '../../../data/portfolio1'

const props = defineProps<{
  title: string
  description?: string
  youtubeId?: string
  items?: PortfolioItem[]
  heading?: string
}>()

const headingText = computed(() => props.heading ?? props.title)
</script>

<template>
  <section class="portfolio-page">
    <header class="hero">
      <h1>{{ headingText }}</h1>
      <p v-if="description" class="hero-description">{{ description }}</p>
      <div v-if="youtubeId" class="hero-video">
        <YouTube :id="youtubeId" width="70%" />
      </div>
    </header>

    <PortfolioGrid :items="items" />
  </section>
</template>

<style scoped>
.portfolio-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.hero {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.hero-description {
  max-width: 70ch;
  opacity: 0.85;
}
.hero-video {
  margin-top: 8px;
}
</style>
