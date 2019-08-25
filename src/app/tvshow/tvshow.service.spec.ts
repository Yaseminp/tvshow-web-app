import { TestBed } from '@angular/core/testing';

import { TvShowService } from './tvshow.service';

describe('TvshowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvShowService = TestBed.get(TvShowService);
    expect(service).toBeTruthy();
  });
});
