import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ITvShow } from '../itv-show';
import { map } from 'rxjs/operators';



interface ITvShowData {
    name: string,
    genres: string,
    runtime: number,
    schedule:{
      time: number,
      days: string
    },
    rating: {
      average: number   
    },
    weight: number,
    image: {
      medium: string
    },
   summary: string,
    _links: {
     previousepisode:{
       href: string
     } 
  }
}
@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private httpClient: HttpClient) { }

getTvShow (name:string){
return this.httpClient.get<ITvShowData>(`${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}&appid=${environment.appId}`).pipe(
  map(data => this.transformToITvShow(data))
);
  }
  private transformToITvShow(data:ITvShowData) : ITvShow{
    return {
      name: data.name,
      genres: data.genres[0],
      runtime: data.runtime,
      schedule: data.schedule.time,
      days: data.schedule.days[0],
      rating: data.rating.average,
      weight: data.weight,
      image: data.image.medium,
      summary:data.summary,
      previousepisode: `${data._links.previousepisode.href}`
    }
  }
}

 