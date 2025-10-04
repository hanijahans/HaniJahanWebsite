---
# https://vitepress.dev/reference/default-theme-home-page
layout: page
pageClass: home-full-hero
title: false
heroShade: 0.5

---

<div
  class="home-hero-image"
  :style="{ '--home-hero-shade-control': heroShade }"
>
  <div class="home-hero-content" :class="{ 'home-hero-content--light': heroShade < 0 }">
    <h1>Worldbuilding &amp; Procedural Tools</h1>
  </div>
</div>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const heroShade = computed(() => {
  const raw = Number(frontmatter.value.heroShade ?? 0)

  if (!Number.isFinite(raw)) {
    return 0
  }

    return Math.max(-1, Math.min(1, raw))
})
</script>