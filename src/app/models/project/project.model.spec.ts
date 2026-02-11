import { Project } from './project.model';

describe('Project', () => {
  it('should create an instance', () => {
    const p: Project = { id: 1, title: 't', description: 'd', imageUrl: '' };
    expect(p).toBeTruthy();
  });
});