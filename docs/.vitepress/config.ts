import { defineConfig } from 'vitepress'

export default defineConfig({
  // Site
  title: 'Hani Jahan',
  description: 'Worldbuilding, Houdini, Unity, Unreal, GameDev, coffee',

  // Search (top-level in VP v1)
  search: { provider: 'local' },

  // Sitemap (top-level)
  sitemap: { hostname: 'https://hanijahan.com' },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Portfolio', link: '/portfolio/' },
      { text: 'Blog', link: '/blog/' },
      {
        text: 'Products',
        items: [{ text: 'Unity Free Pack', link: '/products/unity/free-pack/' }]
      },
      { text: 'Worldbuilding', link: '/worldbuilding/' },
      { text: 'Houdini', link: '/houdini/' },
      { text: 'Contact', link: '/contact/' }
    ],

    footer: {
      message: '© Hani Jahan'
      // optional footer links for secondary discovery
      // Add these to your footer component or a custom footer block
    },

    // Sidebar: map a section to a path prefix
    sidebar: {
      '/blog/': [
        {
          text: 'Blog',
          items: [{ text: 'All posts', link: '/blog/' }]
        }
      ],

      // add these later when pages exist
      '/worldbuilding/': [{ text: 'Worldbuilding', items: [] }],
      '/houdini/': [{ text: 'Houdini', items: [] }]
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/hanijahans/' }]
  },

  head: [
    ['meta', { property: 'og:title', content: 'Portfolio — Hani Jahan' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: '/portfolio/worldlattice-cover.jpg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ]
})