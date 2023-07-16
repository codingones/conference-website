import { MetadataRoute } from 'next';
import { config } from 'dotenv';

config();

const hostnameFromEnv = (): string => process.env['HOSTNAME'] ?? 'localhost';

const portFromEnv = (): number | undefined => (process.env['PORT'] ? +process.env['PORT'] : undefined);

const isSecureProtocolFromEnv = (): boolean => process.env['PROTOCOL'] === 'https';

const protocol = (isSecure: boolean): string => `http${isSecure ? 's' : ''}`;

export const sitemap = (hostname: string, port?: number, isSecure: boolean = true): string =>
  port ? `${protocol(isSecure)}://${hostname}:${port}/sitemap.xml` : `${protocol(isSecure)}://${hostname}/sitemap.xml`;

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: '/private/'
  },
  sitemap: sitemap(hostnameFromEnv(), portFromEnv(), isSecureProtocolFromEnv())
});

export default robots;
