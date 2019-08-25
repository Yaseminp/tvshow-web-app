import { Component } from '@angular/core';
import { ITvShow } from './itv-show';
import { TvShowService } from './tvshow/tvshow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tvshow-web-app';

TvSearch: ITvShow;

  constructor(private tvshowservice: TvShowService){}

  doSearch(searchValue){
   const userInput = searchValue;
   this.tvshowservice.getTvShow(userInput).subscribe(data =>this.TvSearch = data);
}
  
}

