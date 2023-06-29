import { TestBed } from '@angular/core/testing';

import { WinkelkarService } from './winkelkar.service';

describe('WinkelkarService', () => {
  let service: WinkelkarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinkelkarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
