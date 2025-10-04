import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useData, useRoute } from 'vitepress'
import PortfolioGrid from './components/PortfolioGrid.vue'
import './custom.css'

function DiscordCTA() {
  return h('div', { class: 'discord-cta' }, [
    h('p', { class: 'discord-title' }, '💬 Join the Conversation'),
    h('p', null, [
      'Want to chat, share your work, or connect with other creators? ',
      h('a', { 
        href: 'https://discord.gg/7pk5Je9bFT', 
        target: '_blank',
        style: 'text-decoration:none; display:inline-flex; align-items:center; gap:6px; font-weight:600;'
      }, [
        h('img', { 
          src: 'https://cdn-icons-png.flaticon.com/512/5968/5968756.png', 
          alt: 'Discord', 
          width: '20', 
          style: 'vertical-align:middle;' 
        }),
        'Join my Discord server'
      ]),
      '.'
    ])
  ])
}

export default {
  ...DefaultTheme,
  Layout() {
    const { frontmatter } = useData()
    const route = useRoute()
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => {
        if (frontmatter.value?.comments === false) return null
        if (!route.path.startsWith('/blog/')) return null
        return h(DiscordCTA)
      }
    })
  },
  enhanceApp({ app }) {
    if (typeof DefaultTheme.enhanceApp === 'function') {
      DefaultTheme.enhanceApp({ app })
    }
    app.component('PortfolioGrid', PortfolioGrid)
  }
}
