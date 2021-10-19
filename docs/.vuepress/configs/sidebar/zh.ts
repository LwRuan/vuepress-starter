import type { SidebarConfig } from 'vuepress-theme-mix'

export const zh: SidebarConfig = [
    "/",
    {
        type: 'link-group',
        text: '第一章',
        link: '/chapter1/',
        children: [
        '/chapter1/bar.md',
        '/chapter1/foo.md',
        ],
    },
]