import { TestBed } from '@angular/core/testing';

import { WinkelServiceService } from './winkel-service.service';

describe('WinkelServiceService', () => {
  let service: WinkelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinkelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
