/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://manaic.in',
  generateRobotsTxt: true,
  exclude: ['/server-only'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};

module.exports = config;
