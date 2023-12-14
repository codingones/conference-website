export const bySlug =
  (slug: string) =>
  (item: { slug: string }): boolean =>
    item.slug === slug;

export const slugify = (text: string): string =>
  text
    .normalize('NFKD')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
