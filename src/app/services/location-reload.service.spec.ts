import { TestBed } from '@angular/core/testing';

import { LocationReloadService } from './location-reload.service';

describe('LocationReloadService', () => {
  let service: LocationReloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationReloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
