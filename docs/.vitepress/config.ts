import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hani Jahan',
  description: 'Worldbuilding, tools, design.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Portfolio', link: '/portfolio/' },
      // add: Blog, About, Contact, etc.
    ]
  },
  head: [
    ['meta', { property: 'og:title', content: 'Portfolio — Hani Jahan' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/portfolio/worldlattice-cover.jpg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ]
})
