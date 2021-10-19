import { defineUserConfig } from 'vuepress'
import type { MixThemeConfig } from 'vuepress-theme-mix/lib/node'
import { sidebar } from './configs'
import mathjax3 from 'markdown-it-mathjax3'
import { path } from '@vuepress/utils'

export default defineUserConfig<MixThemeConfig>({
  lang: 'zh-CN',
  title: 'Visual Computing',
  description: 'Visual computing\'s textbook from VCL group',
  theme: 'vuepress-theme-mix',
  themeConfig: {
    logo: 'vcl-logo.png',
    editLink: false,
    lastUpdated: false,
    sidebar: sidebar.zh,
  },
  extendsMarkdown: (md) => {
    md.use(mathjax3)
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
  dest: 'public',
})