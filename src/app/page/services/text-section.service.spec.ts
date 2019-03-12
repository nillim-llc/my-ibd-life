import { TestBed } from '@angular/core/testing';

import { TextSectionService } from './text-section.service';

describe('TextSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextSectionService = TestBed.get(TextSectionService);
    expect(service).toBeTruthy();
  });
});
