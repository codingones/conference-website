const ASSET_PREFIX: string = process.env['NEXT_PUBLIC_ASSET_PREFIX'] ?? '';

export const asset = (path: string): string => {
  return `${ASSET_PREFIX}${path}`;
};
