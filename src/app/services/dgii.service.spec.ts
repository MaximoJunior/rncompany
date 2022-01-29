import { TestBed } from '@angular/core/testing';

import { DgiiService } from './dgii.service';

describe('DgiiService', () => {
  let service: DgiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DgiiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
