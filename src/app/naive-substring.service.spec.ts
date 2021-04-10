import { TestBed } from '@angular/core/testing';

import { NaiveSubstringService } from './naive-substring.service';

describe('NaiveSubstringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NaiveSubstringService = TestBed.get(NaiveSubstringService);
    expect(service).toBeTruthy();
  });
});
