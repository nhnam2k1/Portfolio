import { describe, it, expect } from 'vitest';
import { education } from '../../src/assets/data/education';

describe('education', () => {
  it('should be an array with at least one entry', () => {
    expect(Array.isArray(education)).toBe(true);
    expect(education.length).toBeGreaterThan(0);
  });

  it('each entry should have required fields', () => {
    education.forEach((ed) => {
      expect(ed.school).toBeTruthy();
      expect(ed.degree).toBeTruthy();
      expect(ed.location).toBeTruthy();
      expect(ed.period).toBeTruthy();
      expect(Array.isArray(ed.notes)).toBe(true);
      expect(ed.notes.length).toBeGreaterThan(0);
    });
  });

  it('should have Fontys University entry', () => {
    const fontys = education.find((e) => e.school.includes('Fontys'));
    expect(fontys).toBeDefined();
    expect(fontys!.degree).toContain('Software Engineering');
    expect(fontys!.location).toBe('Eindhoven, Netherlands');
    expect(fontys!.period).toContain('2019');
    expect(fontys!.period).toContain('2025');
  });

  it('should have The Hague University entry', () => {
    const hague = education.find((e) => e.school.includes('The Hague'));
    expect(hague).toBeDefined();
    expect(hague!.degree).toContain('Innovative Data Visualization');
    expect(hague!.location).toBe('Den Haag, Netherlands');
  });
});
