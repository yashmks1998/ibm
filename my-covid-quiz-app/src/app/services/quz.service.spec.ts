import { TestBed } from '@angular/core/testing';

import { QuzService } from './quz.service';

describe('QuzService', () => {
  let service: QuzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
