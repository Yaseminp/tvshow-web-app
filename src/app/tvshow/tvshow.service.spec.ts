import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TvShowService } from './tvshow.service';

describe('TvshowService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  imports:[
    HttpClientTestingModule
  ]
  }));
  
  it('should be created', () => {
    const service: TvShowService = TestBed.get(TvShowService);
    expect(service).toBeTruthy();
  });
});
