<script setup lang="ts">
import { computed, reactive } from 'vue'
import { houdini, type PortfolioItem } from '../../../data/portfolio1'

const props = defineProps<{ items?: PortfolioItem[] }>()
const gridItems = computed(() => props.items ?? houdini)

const widths = reactive<Record<number, number>>({})

const cardStyles = computed(() =>
  gridItems.value.map((_, index) =>
    widths[index] ? { '--card-width': `${widths[index]}px` } : {}
  )
)

const handleImageLoad = (index: number, event: Event) => {
  const target = event.target as HTMLImageElement | null
  if (!target?.naturalWidth) return
  widths[index] = target.naturalWidth
}
</script>

<template>
  <div class="portfolio-grid">
    <div
      v-for="(it, i) in gridItems"
      :key="i"
      class="card"
      :style="cardStyles[i]"
    >
      <a v-if="it.url" :href="it.url" class="cover">
        <img
          :src="it.cover"
          :alt="it.title"
          loading="lazy"
          @load="handleImageLoad(i, $event)"
        />
      </a>
      <div class="body">
        <h3 class="title">
          <a v-if="it.url" :href="it.url">{{ it.title }}</a>
          <span v-else>{{ it.title }}</span>
        </h3>
        <p v-if="it.subtitle" class="subtitle">{{ it.subtitle }}</p>
        <p v-if="it.description" class="desc">{{ it.description }}</p>
        <div class="meta">
          <span v-if="it.role">{{ it.role }}</span>
          <span v-if="it.year">· {{ it.year }}</span>
        </div>
        <div v-if="it.tags?.length" class="tags">
          <span v-for="t in it.tags" :key="t" class="tag">{{ t }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}
.card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg);
  transition: transform .15s ease, box-shadow .15s ease;
  width: min(var(--card-width, 320px), 100%);
  flex: 0 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.card:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,.08); }
.cover img {
  display: block;
  width: 100%;
  height: auto;
}
.body { padding: 12px 14px; }
.title { margin:0 0 4px; font-size: 1rem; line-height:1.2; }
.subtitle { margin:0 0 6px; opacity:.8; }
.desc { margin:0 0 8px; font-size:.92rem; opacity:.9; }
.meta { font-size:.85rem; opacity:.8; margin-bottom:8px; }
.tags { display:flex; flex-wrap:wrap; gap:6px; }
.tag { font-size:.75rem; padding:2px 8px; border-radius:999px; border:1px solid var(--vp-c-divider); }
</style>
