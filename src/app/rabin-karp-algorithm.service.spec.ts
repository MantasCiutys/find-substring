import { TestBed } from '@angular/core/testing';

import { RabinKarpAlgorithmService } from './rabin-karp-algorithm.service';

describe('RabinKarpAlgorithmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RabinKarpAlgorithmService = TestBed.get(RabinKarpAlgorithmService);
    expect(service).toBeTruthy();
  });
});
