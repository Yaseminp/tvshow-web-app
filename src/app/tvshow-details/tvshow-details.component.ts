import { Component, Input, OnInit } from '@angular/core';
import {ITvShow} from '../itv-show';


@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css']
})
export class TvshowDetailsComponent implements OnInit {

@Input() current: ITvShow
  constructor() {
  }
  ngOnInit() {
    
  }

}

