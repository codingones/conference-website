import { MetadataRoute } from 'next';
import { urlFromEnv } from './_utils';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: '/private/'
  },
  sitemap: `${urlFromEnv()}/sitemap.xml`
});

export default robots;
