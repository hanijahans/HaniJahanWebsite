import { DefaultTheme, defineConfig } from 'vitepress'

const navItems: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/' },
  { text: 'Portfolio', link: '/portfolio/' },
  { text: 'Blog', link: '/blog/' },
  {
    text: 'Products',
    items: [{ text: 'Unity Free Pack', link: '/products/unity/free-pack/' }]
  },
  { text: 'Worldbuilding', link: '/worldbuilding/' },
  { text: 'Contact', link: '/contact/' }
]

export default defineConfig({
  // Site
  title: 'Hani Jahan Design',
  description: 'Worldbuilding, Houdini, Unity, Unreal, GameDev, Coffee',
  appearance: 'dark',

  // Sitemap (top-level)
  sitemap: { hostname: 'https://hanijahan.com' },

  themeConfig: {
    logo: '/hjd/hjd-logo.png',
    nav: navItems,
    
    search: undefined, //{ provider: 'local' },

    footer: {
      message: '© Hani Jahan Design'
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

      '/worldbuilding/': [{ text: 'Worldbuilding', items: [] }],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/hanijahans/' }]
  },
})