// docs/.vitepress/theme/posts.data.js
import { createContentLoader } from 'vitepress'
export default createContentLoader('blog/**/*.md', {
  excerpt: true,
  transform: (posts) =>
    posts
      .filter(p => p.url !== '/blog/') // skip the index page
      .map(p => ({ ...p, _date: p.frontmatter?.date ? new Date(p.frontmatter.date) : new Date(0) }))
      .sort((a, b) => b._date - a._date)
})
