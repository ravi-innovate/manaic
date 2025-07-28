const { createClient } = require('@supabase/supabase-js');

const POSTS_PER_PAGE = 6;

async function fetchSupabaseBlogPaths(config) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const paths = [];

  const { count } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true });

  const totalPages = count ? Math.ceil(count / POSTS_PER_PAGE) : 1;

  paths.push({ loc: '/tech', changefreq: 'daily', priority: 0.9, lastmod: new Date().toISOString().split('.')[0] + 'Z' });

  for (let i = 2; i <= totalPages; i++) {
    paths.push({ loc: `/tech?page=${i}`, changefreq: 'daily', priority: 0.8, lastmod: new Date().toISOString().split('.')[0] + 'Z' });
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('slug, updated_at');

  posts?.forEach((post) => {
    paths.push({
      loc: `/tech/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: post.updated_at?.split('.')[0] + 'Z' || new Date().toISOString().split('.')[0] + 'Z',
    });
  });

  return paths;
}

const baseUrl = (process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000').replace(/\/$/, '');

const config = {
  siteUrl: baseUrl,
  generateRobotsTxt: true,
  outDir: './public',
  sitemapFilename: 'sitemap.xml',
  exclude: ['/admin/*', '/private-page', '/api/*', '/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    // additionalSitemaps: [`${baseUrl}/server-sitemap.xml`],
  },
  transform: async (config, path) => ({
    loc: path,
    changefreq: 'daily',
    priority: 0.7,
    lastmod: config.autoLastmod ? new Date().toISOString().split('.')[0] + 'Z' : undefined,
  }),
  additionalPaths: fetchSupabaseBlogPaths,
  sitemapSize: 50000,
  generateIndexSitemap: true,
};

module.exports = config;
