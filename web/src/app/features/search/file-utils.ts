export function getExtension(name: string | undefined) {
  if (!name) return '';

  const dot = name.lastIndexOf('.');
  return dot > 0 ? name?.slice(dot + 1).toUpperCase() : '';
}

export function formatSize(size: number) {
  return size >= 1e9 ? `${(size / 1e9).toFixed(1)} GB` : `${Math.round(size / 1e6)} MB`;
}
