import { describe, it, expect, vi } from 'vitest';

vi.mock('~/i18n/config', () => ({ default: { language: 'en' } }));
import { parseNumber } from './format';

describe('parseNumber', () => {
  it('parses a plain integer string', () => {
    expect(parseNumber('42')).toBe(42);
  });

  it('strips non-digit characters', () => {
    expect(parseNumber('4 000')).toBe(4000);
    expect(parseNumber('1,234')).toBe(1234);
    expect(parseNumber('1.234')).toBe(1234);
  });

  it('returns 0 for empty string', () => {
    expect(parseNumber('')).toBe(0);
  });

  it('returns 0 for string with no digits', () => {
    expect(parseNumber('abc')).toBe(0);
  });
});
