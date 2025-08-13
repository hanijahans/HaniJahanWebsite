import { createContentLoader } from 'vitepress'

// Load all md files in docs/blog/
export default createContentLoader('blog/*.md', {
  excerpt: true,            // grabs the first paragraph as excerpt
  transform: (posts) => {
    // sort by frontmatter.date desc; fallback to file path if no date
    return posts
      .map(p => ({
        ...p,
        _date: p.frontmatter?.date ? new Date(p.frontmatter.date) : new Date(0)
      }))
      .sort((a, b) => b._date - a._date)
  }
})
