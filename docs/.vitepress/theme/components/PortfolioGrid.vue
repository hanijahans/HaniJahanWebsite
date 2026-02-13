<script setup lang="ts">
import { computed } from 'vue'
import { houdini, type PortfolioItem } from '../../../data/portfolio'

const props = defineProps<{ items?: PortfolioItem[] }>()
const gridItems = computed(() => props.items ?? houdini)
</script>

<template>
  <div class="portfolio-grid">
    <div v-for="(it, i) in gridItems" :key="i" class="card">
      <div v-if="it.videoEmbed || it.video" class="cover">
        <div class="cover-media">
          <iframe
            v-if="it.videoEmbed"
            :src="it.videoEmbed"
            :title="`${it.title} video`"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
          <video
            v-else
            :src="it.video"
            :poster="it.cover"
            muted
            playsinline
            controls
          />
        </div>
      </div>
      <a v-else-if="it.url" :href="it.url" class="cover">
        <img
          :src="it.cover"
          :alt="it.title"
          loading="lazy"
        />
      </a>
      <div v-else class="cover">
        <img
          :src="it.cover"
          :alt="it.title"
          loading="lazy"
        />
      </div>
      <div class="body">
        <a v-if="it.url" :href="it.url" class="body-link">
          <h3 class="title">{{ it.title }}</h3>
          <p v-if="it.subtitle" class="subtitle">{{ it.subtitle }}</p>
          <p v-if="it.description" class="desc">{{ it.description }}</p>
          <div class="meta">
            <span v-if="it.role">{{ it.role }}</span>
            <span v-if="it.year">· {{ it.year }}</span>
          </div>
          <div v-if="it.tags?.length" class="tags">
            <span v-for="t in it.tags" :key="t" class="tag">{{ t }}</span>
          </div>
        </a>
        <template v-else>
          <h3 class="title">{{ it.title }}</h3>
          <p v-if="it.subtitle" class="subtitle">{{ it.subtitle }}</p>
          <p v-if="it.description" class="desc">{{ it.description }}</p>
          <div class="meta">
            <span v-if="it.role">{{ it.role }}</span>
            <span v-if="it.year">· {{ it.year }}</span>
          </div>
          <div v-if="it.tags?.length" class="tags">
            <span v-for="t in it.tags" :key="t" class="tag">{{ t }}</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portfolio-grid {
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); */
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}
@media (max-width: 960px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  .portfolio-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
.card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg);
  transition: transform .15s ease, box-shadow .15s ease;
  width: 100%;
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
.cover-media {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
}
.cover-media iframe,
.cover-media video {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}
.body { padding: 12px 14px; }
.body-link {
  display: block;
  color: inherit;
  text-decoration: none;
}
.title { margin:0 0 4px; font-size: 1rem; line-height:1.2; }
.subtitle { margin:0 0 6px; opacity:.8; }
.desc { margin:0 0 8px; font-size:.92rem; opacity:.9; }
.meta { font-size:.85rem; opacity:.8; margin-bottom:8px; }
.tags { display:flex; flex-wrap:wrap; gap:6px; }
.tag { font-size:.75rem; padding:2px 8px; border-radius:999px; border:1px solid var(--vp-c-divider); }
</style>
