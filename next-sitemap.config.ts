import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://manaic.in',
  generateRobotsTxt: true,
  exclude: ['/server-only'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}

export default config
