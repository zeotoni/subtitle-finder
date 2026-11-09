import { getNextTheme } from './theme-utils';

describe('getNextTheme', () => {
  it('returns dark when there is no attribute and the system is light', () => {
    const theme = getNextTheme(null, false);
    expect(theme).toBe('dark');
  });

  it('returns light when there is no attribute and the system is dark', () => {
    const theme = getNextTheme(null, true);
    expect(theme).toBe('light');
  });

  it('returns light when the attribute is dark, even if the system is light', () => {
    const theme = getNextTheme('dark', false);
    expect(theme).toBe('light');
  });

  it('returns dark when the attribute is light, even if the system is dark', () => {
    const theme = getNextTheme('light', true);
    expect(theme).toBe('dark');
  });

  it('treats an unknown attribute value as light', () => {
    const theme = getNextTheme('banana', false);
    expect(theme).toBe('dark');
  });
});
