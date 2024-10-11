import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Harbur Playbook',
  description: 'technical how-to guides',

  theme: defaultTheme({
    repo: "harbur/playbook",
    docsDir: 'docs',
    editLinks: true,
    logo: 'https://vuejs.press/images/hero.png',
    navbar: [
      { text: "🦄 About", link: "/about" },
      { text: "🏄 Onboarding", link: "/onboarding" },
      { text: "💻 How we Work", link: "/how-we-work" },
      { text: "🎯 Values", link: "/values" },
      { text: "🏖️ Perks", link: "/perks" }
    ]
  }),

  bundler: viteBundler(),
})
