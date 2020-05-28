import { TestBed } from '@angular/core/testing';

import { RickymortyapiService } from './rickymortyapi.service';

describe('RickymortyapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RickymortyapiService = TestBed.get(RickymortyapiService);
    expect(service).toBeTruthy();
  });
});
