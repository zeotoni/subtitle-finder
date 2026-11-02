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
  if (size >= 1e9) {
    return `${(size / 1e9).toFixed(1).replace('.', ',')} GB`;
  }

  if (size >= 1e6) {
    const mbVal = Math.round(size / 1e6);
    return mbVal === 1000 ? `1,0 GB` : `${mbVal} MB`;
  }

  const kbVal = Math.round(size / 1e3);
  return kbVal === 1000 ? `1 MB` : `${kbVal} KB`;
}
