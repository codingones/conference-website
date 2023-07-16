import { it, describe, expect } from 'vitest';
import { sitemap } from './robots';

describe('robots file generation', (): void => {
  it('should build sitemap url with port', (): void => {
    const url: string = sitemap('localhost', 3000, false);

    expect(url).toBe('http://localhost:3000/sitemap.xml');
  });

  it('should build sitemap url with port and example.com hostname', (): void => {
    const url: string = sitemap('example.com', 3000, false);

    expect(url).toBe('http://example.com:3000/sitemap.xml');
  });

  it('should build sitemap url with port and secured protocol', (): void => {
    const url: string = sitemap('localhost', 3000);

    expect(url).toBe('https://localhost:3000/sitemap.xml');
  });

  it('should build sitemap url without port', (): void => {
    const url: string = sitemap('localhost', undefined, false);

    expect(url).toBe('http://localhost/sitemap.xml');
  });

  it('should build sitemap url with example.com hostname', (): void => {
    const url: string = sitemap('example.com', undefined, false);

    expect(url).toBe('http://example.com/sitemap.xml');
  });

  it('should build sitemap url with https protocole', (): void => {
    const url: string = sitemap('example.com');

    expect(url).toBe('https://example.com/sitemap.xml');
  });
});
