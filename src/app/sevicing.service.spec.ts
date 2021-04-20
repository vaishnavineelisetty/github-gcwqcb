import { TestBed } from '@angular/core/testing';

import { SevicingService } from './sevicing.service';

describe('SevicingService', () => {
  let service: SevicingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SevicingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
