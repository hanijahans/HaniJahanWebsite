// docs/.vitepress/theme/posts.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/*.md', {
  excerpt: true,
  transform: (posts) =>
    posts
      // 1) Skip the index itself
      .filter(p => p.url !== '/blog/')
      // 2) Optional: allow a 'draft: true' frontmatter to hide posts
      .filter(p => !p.frontmatter?.draft)
      // 3) Normalize date; fall back to filename YYYYMMDD-*.md if present
      .map(p => {
        const fmDate = p.frontmatter?.date ? new Date(p.frontmatter.date) : null
        let d = fmDate && !isNaN(+fmDate) ? fmDate : null
        if (!d) {
          const match = p.file?.match(/(\d{4})(\d{2})(\d{2})-/) // 20250813-hello.md
          if (match) d = new Date(`${match[1]}-${match[2]}-${match[3]}T00:00:00Z`)
        }
        return { ...p, _date: d ?? new Date(0) }
      })
      .sort((a, b) => b._date - a._date)
})
