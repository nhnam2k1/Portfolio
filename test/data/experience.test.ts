import { describe, it, expect } from 'vitest';
import { experience } from '../../src/assets/data/experience';

describe('experience', () => {
  it('should be an array with at least one entry', () => {
    expect(Array.isArray(experience)).toBe(true);
    expect(experience.length).toBeGreaterThan(0);
  });

  it('each entry should have required fields', () => {
    experience.forEach((exp) => {
      expect(exp.company).toBeTruthy();
      expect(exp.role).toBeTruthy();
      expect(exp.location).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(Array.isArray(exp.bullets)).toBe(true);
      expect(exp.bullets.length).toBeGreaterThan(0);
      exp.bullets.forEach((bullet) => {
        expect(bullet).toBeTruthy();
        expect(bullet.length).toBeGreaterThan(10);
      });
    });
  });

  it('should have NAB Innovation Centre Vietnam as the most recent entry', () => {
    const nab = experience[0];
    expect(nab.company).toBe('NAB Innovation Centre Vietnam');
    expect(nab.role).toBe('DevOps Engineer');
    expect(nab.location).toBe('Ho Chi Minh City, Vietnam');
    expect(nab.period).toContain('2026');
    expect(nab.bullets.length).toBe(4);
  });

  it('should have Fontys ICT InnovationLab entry', () => {
    const fontys = experience.find((e) => e.company.includes('Fontys'));
    expect(fontys).toBeDefined();
    expect(fontys!.role).toContain('Intern');
    expect(fontys!.location).toBe('Eindhoven, Netherlands');
  });

  it('should have Vanderlande Industries entry', () => {
    const vanderlande = experience.find((e) => e.company === 'Vanderlande Industries');
    expect(vanderlande).toBeDefined();
    expect(vanderlande!.period).toContain('2022');
    expect(vanderlande!.bullets.length).toBe(2);
    expect(vanderlande!.bullets[0]).toContain('Improved RESTful APIs');
  });

  it('should have unique company names', () => {
    const companies = experience.map((e) => e.company);
    const unique = new Set(companies);
    expect(unique.size).toBe(companies.length);
  });
});
