const VIDEO_EXTENSIONS = [
  'mkv',
  'mp4',
  'avi',
  'webm',
  'mov',
  'm4v',
  'wmv',
  'mpg',
  'mpeg',
  'm2ts',
  'flv',
  'divx',
  'ogv',
];

export function getExtension(name: string | undefined) {
  if (!name) return '';

  const dot = name.lastIndexOf('.');

  if (dot > 0) {
    if (VIDEO_EXTENSIONS.includes(name.slice(dot + 1).toLowerCase())) {
      return name.slice(dot + 1).toUpperCase();
    }
  }
  return '';
}

export function formatSize(size: number) {
  return size >= 1e9 ? `${(size / 1e9).toFixed(1)} GB` : `${Math.round(size / 1e6)} MB`;
}
