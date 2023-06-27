import { TestBed } from '@angular/core/testing';

import { GroentenServiceService } from './groenten-service.service';

describe('GroentenServiceService', () => {
  let service: GroentenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroentenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
