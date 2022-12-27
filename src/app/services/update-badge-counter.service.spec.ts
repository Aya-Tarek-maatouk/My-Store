import { TestBed } from '@angular/core/testing';

import { UpdateBadgeCounterService } from './update-badge-counter.service';

describe('UpdateBadgeCounterService', () => {
  let service: UpdateBadgeCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateBadgeCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
