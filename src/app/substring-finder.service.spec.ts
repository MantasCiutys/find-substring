import { TestBed } from '@angular/core/testing';

import { SubstringFinderService } from './substring-finder.service';

describe('SubstringFinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubstringFinderService = TestBed.get(SubstringFinderService);
    expect(service).toBeTruthy();
  });
});
