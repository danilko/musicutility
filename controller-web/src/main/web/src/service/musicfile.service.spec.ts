import { TestBed } from '@angular/core/testing';

import { MusicfileService } from './musicfile.service';

describe('MusicfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicfileService = TestBed.get(MusicfileService);
    expect(service).toBeTruthy();
  });
});
