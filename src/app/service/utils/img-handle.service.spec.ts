import { TestBed } from '@angular/core/testing';

import { ImgHandleService } from './img-handle.service';

describe('ImgHandleService', () => {
  let service: ImgHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
