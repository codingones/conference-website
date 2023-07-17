import { it, describe, expect } from 'vitest';
import { url } from './url.util';

describe('url utility', (): void => {
  it('should build url with port', (): void => {
    expect(url('localhost', 3000, false)).toBe('http://localhost:3000');
  });

  it('should build url with port and example.com hostname', (): void => {
    expect(url('example.com', 3000, false)).toBe('http://example.com:3000');
  });

  it('should build url with port and secured protocol', (): void => {
    expect(url('localhost', 3000)).toBe('https://localhost:3000');
  });

  it('should build url without port', (): void => {
    expect(url('localhost', undefined, false)).toBe('http://localhost');
  });

  it('should build url with example.com hostname', (): void => {
    expect(url('example.com', undefined, false)).toBe('http://example.com');
  });

  it('should build url with https protocole', (): void => {
    expect(url('example.com')).toBe('https://example.com');
  });
});
