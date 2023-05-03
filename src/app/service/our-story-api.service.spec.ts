import { TestBed } from '@angular/core/testing';

import { OurStoryApiService } from './our-story-api.service';

describe('OurStoryApiService', () => {
  let service: OurStoryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurStoryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
