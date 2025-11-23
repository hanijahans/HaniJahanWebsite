---
layout: page
pageClass: worldlattice-hero-page
title: false
heroShade: 0.4        # tweak darkness if needed
heroTextTone: 0.7     # how light/dark the text should be
---

<div
  class="home-hero-image"
  :style="{ '--home-hero-shade-control': heroShade }"
>
  <div
    class="home-hero-content"
    :style="{ '--home-hero-text-tone': heroTextTone }"
  >
    <h1>WorldLattice</h1>
    <p>
      A fast, rule-driven worldbuilding toy for painting samples and generating
      tiny worlds.
    </p>

    <div class="hero-buttons">
      <a
        class="hero-button primary"
        href="https://store.steampowered.com/app/XXXXXX/WorldLattice/"
        target="_blank"
        rel="noreferrer"
      >
        Wishlist on Steam
      </a>

      <a
        class="hero-button secondary"
        href="/blog/devlog/01-worldlattice-a-world-building-tool.html"
      >
        Read the first devlog
      </a>
    </div>
  </div>
</div>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const heroShade = computed(() => {
  const raw = Number(frontmatter.value.heroShade ?? 0)
  if (!Number.isFinite(raw)) return 0
  return Math.max(-1, Math.min(1, raw))
})

const fallbackTone = computed(() => (heroShade.value < 0 ? 0 : 1))

const heroTextTone = computed(() => {
  const raw = Number(frontmatter.value.heroTextTone ?? fallbackTone.value)
  if (!Number.isFinite(raw)) return fallbackTone.value
  return Math.max(0, Math.min(1, raw))
})
</script>
