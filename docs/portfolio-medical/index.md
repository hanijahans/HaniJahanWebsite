---
title: PORTFOLIO
description: PORTFOLIO description
layout: page
---

<script setup>
import { getPortfolioByCategory } from '/data/portfolio'

const category = 'Medical'
const houdini = getPortfolioByCategory(category)
</script>

<PortfolioPage
  title="PORTFOLIO"
  description="Biology / "
  youtube-id=""
  :items="houdini"
/>
