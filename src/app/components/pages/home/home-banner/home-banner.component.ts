import { Component, OnInit } from '@angular/core';
import { path } from '../../../../configurations/config.js';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {

  path: string = path.url;
  
  constructor() { }

  ngOnInit(): void {
  }

}
