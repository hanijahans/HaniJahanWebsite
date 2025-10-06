import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { useData, useRoute } from 'vitepress'
import PortfolioGrid from './components/PortfolioGrid.vue'
import './custom.css'

let mailerLiteScriptLoaded = false

function loadMailerLite() {
  if (typeof window === 'undefined') return

  if (typeof window.ml === 'function') {
    window.ml('account', '1722221')
    mailerLiteScriptLoaded = true
    return
  }

  if (mailerLiteScriptLoaded) return

  const w = window
  const d = document
  const f = 'ml'

  w[f] =
    w[f] ||
    function () {
      ;(w[f].q = w[f].q || []).push(arguments)
    }

  const script = d.createElement('script')
  script.async = 1
  script.src = 'https://assets.mailerlite.com/js/universal.js'
  const firstScript = d.getElementsByTagName('script')[0]

  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript)
  } else if (d.head) {
    d.head.appendChild(script)
  } else if (d.body) {
    d.body.appendChild(script)
  }

  w.ml('account', '1722221')
  mailerLiteScriptLoaded = true
}

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
    const isDraft = frontmatter.value?.draft
    const isBlogIndex = route.path === '/blog/'

    if (isDraft && !isBlogIndex) {
      return h(DefaultTheme.NotFound)
    }
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => {
        if (frontmatter.value?.comments === false) return null
        if (!route.path.startsWith('/blog/')) return null
        return h(DiscordCTA)
      }
    })
  },
  enhanceApp({ app, router }) {
    if (typeof DefaultTheme.enhanceApp === 'function') {
      DefaultTheme.enhanceApp({ app })
    }
    app.component('PortfolioGrid', PortfolioGrid)
        if (typeof window !== 'undefined') {
      loadMailerLite()
      if (router && typeof router.onAfterRouteChanged === 'function') {
        router.onAfterRouteChanged(() => {
          loadMailerLite()
        })
      }
    }
  }
}
