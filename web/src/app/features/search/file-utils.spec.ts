import { formatSize, getExtension } from './file-utils';

describe('getExtension', () => {
  it('returns MKV for movie.mkv', () => {
    const ex = getExtension('movie.mkv');
    expect(ex).toBe('MKV');
  });

  it('handles extensions longer than three letters', () => {
    const ex = getExtension('movie.webm');
    expect(ex).toBe('WEBM');
  });

  it('handles names with multiple dots', () => {
    const ex = getExtension('Weathering.With.You.2019.1080p.BluRay.x264.AAC5.1-[YTS.MX].mp4');
    expect(ex).toBe('MP4');
  });

  it('handles empty filenames', () => {
    const ex = getExtension('');
    expect(ex).toBe('');
  });

  it('handles undefined filenames', () => {
    const ex = getExtension(undefined);
    expect(ex).toBe('');
  });

  it('handles files with names that contain no dots', () => {
    const ex = getExtension('A viagem de chihiromp4');
    expect(ex).toBe('');
  });

  it('returns empty when the text after the last dot is not a known extension', () => {
    const ex = getExtension('Weathering.With.You.2019.1080p.BluRay.x264.AAC5.1-[YTS.MX]');
    expect(ex).toBe('');
  });

  it('handles file extensions containing a mix of uppercase and lowercase letters', () => {
    const ex = getExtension('Spider-Man.mP4');
    expect(ex).toBe('MP4');
  });
});

describe('formatSize', () => {
  it('files with 0 bytes should return 0 KB', () => {
    const ex = formatSize(0);
    expect(ex).toBe('0 KB');
  });

  it('files with 2000 bytes should return 2 KB', () => {
    const ex = formatSize(2000);
    expect(ex).toBe('2 KB');
  });

  it('files with 450.000 bytes should return 450 KB', () => {
    const ex = formatSize(450000);
    expect(ex).toBe('450 KB');
  });

  it('files with 1.000.000 bytes should return 1 MB', () => {
    const ex = formatSize(1000000);
    expect(ex).toBe('1 MB');
  });

  it('files with 50.000.000 bytes should return 50 MB', () => {
    const ex = formatSize(50000000);
    expect(ex).toBe('50 MB');
  });

  it('files with 999.999 bytes should return 1 MB', () => {
    const ex = formatSize(999999);
    expect(ex).toBe('1 MB');
  });

  it('files with 1.000.000.000 bytes should return 1,0 GB', () => {
    const ex = formatSize(1000000000);
    expect(ex).toBe('1,0 GB');
  });

  it('files with 1.400.000.000 bytes should return 1,4 GB', () => {
    const ex = formatSize(1400000000);
    expect(ex).toBe('1,4 GB');
  });

  it('files with 999.999.999 bytes should return 1,0 GB', () => {
    const ex = formatSize(999999999);
    expect(ex).toBe('1,0 GB');
  });
});
