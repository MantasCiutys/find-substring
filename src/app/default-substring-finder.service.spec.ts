import { TestBed } from '@angular/core/testing';

import { DefaultSubstringFinderService } from './default-substring-finder.service';

describe('DefaultSubstringFinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefaultSubstringFinderService = TestBed.get(DefaultSubstringFinderService);
    expect(service).toBeTruthy();
  });
});
