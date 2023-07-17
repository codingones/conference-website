import { MetadataRoute } from 'next';
import { urlFromEnv } from '@/utils';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: urlFromEnv(),
    lastModified: new Date()
  }
];

export default sitemap;
