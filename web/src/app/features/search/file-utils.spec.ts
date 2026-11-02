import { getExtension } from './file-utils';

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
