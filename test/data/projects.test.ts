import { describe, it, expect } from 'vitest';
import { projects } from '../../src/assets/data/projects';

describe('projects', () => {
  it('should be an array with at least one entry', () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it('each entry should have required fields', () => {
    projects.forEach((p) => {
      expect(p.title).toBeTruthy();
      expect(p.summary).toBeTruthy();
      expect(Array.isArray(p.stack)).toBe(true);
      expect(p.stack.length).toBeGreaterThan(0);
      expect(Array.isArray(p.highlights)).toBe(true);
      expect(p.highlights.length).toBeGreaterThan(0);
      p.highlights.forEach((h) => {
        expect(h).toBeTruthy();
      });
    });
  });

  it('should have Virtual Human project', () => {
    const virtualHuman = projects.find((p) => p.title === 'Virtual Human');
    expect(virtualHuman).toBeDefined();
    expect(virtualHuman!.stack).toContain('Spring Boot');
    expect(virtualHuman!.stack).toContain('Apache Kafka');
    expect(virtualHuman!.stack).toContain('Docker');
    expect(virtualHuman!.stack).toContain('Kubernetes');
    expect(virtualHuman!.demoUrl).toContain('portfolio.drieam.app');
  });

  it('should have ChatsApp project', () => {
    const chatsApp = projects.find((p) => p.title === 'ChatsApp');
    expect(chatsApp).toBeDefined();
    expect(chatsApp!.stack).toContain('ASP.NET Core');
    expect(chatsApp!.stack).toContain('MongoDB');
    expect(chatsApp!.stack).toContain('Azure Container App');
    expect(chatsApp!.stack).toContain('Azure Message Bus');
    expect(chatsApp!.stack).toContain('Azure API Management');
    expect(chatsApp!.demoUrl).toContain('portfolio.drieam.app');
  });

  it('should have Vanderlande Tool project', () => {
    const tool = projects.find((p) => p.title === 'Vanderlande Tool (REST APIs)');
    expect(tool).toBeDefined();
    expect(tool!.stack).toContain('C#');
    expect(tool!.stack).toContain('NUnit');
  });
});
