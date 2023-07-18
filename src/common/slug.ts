export const bySlug =
  (slug: string) =>
  (item: { slug: string }): boolean =>
    item.slug === slug;
