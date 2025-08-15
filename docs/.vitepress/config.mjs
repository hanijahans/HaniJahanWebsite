import { defineConfig } from 'vitepress'

export default defineConfig({
  // Site
  title: 'Hani Jahan',
  description: 'Worldbuilding, Houdini, Unity, Unreal, GameDev, coffee',

  // Search (top-level in VP v1)
  search: { provider: 'local' },

  // Sitemap (top-level)
  sitemap: { hostname: 'https://hanijahan.com' },

  // Theme config
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Worldbuilding', link: '/worldbuilding/' },
      { text: 'Houdini', link: '/houdini/' },
      { text: 'Contact', link: '/contact/' } // single, focused CTA

    ],
    
    footer: {
      message: '© Hani Jahan',
      // optional footer links for secondary discovery
      // Add these to your footer component or a custom footer block
    },

    // Sidebar: map a section to a path prefix
    sidebar: {
      '/blog/': [
        {
          text: 'Blog',
          items: [
            { text: 'All posts', link: '/blog/' }
          ]
        }
      ],
      // add these later when pages exist
      '/worldbuilding/': [{ text: 'Worldbuilding', items: [] }],
      '/houdini/': [{ text: 'Houdini', items: [] }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hanijahans/' }
    ]
  }

  
})
