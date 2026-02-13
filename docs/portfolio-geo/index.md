---
title: PORTFOLIO
description: PORTFOLIO description
layout: page
---

<script setup>
import { getPortfolioByCategory } from '/data/portfolio'

const category = 'Geospatial'
const houdini = getPortfolioByCategory(category)
</script>

<PortfolioPage
  title="PORTFOLIO"
  description="Geospatial Data Visualization / Mapping / Analytics"
  youtube-id=""
  :items="houdini"
/>
