import { TestBed } from '@angular/core/testing';

import { FeachdataService } from './feachdata.service';

describe('FeachdataService', () => {
  let service: FeachdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeachdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
