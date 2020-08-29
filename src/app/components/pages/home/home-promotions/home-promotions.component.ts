import { Component, OnInit } from '@angular/core';
import { path } from '../../../../configurations/config.js';

@Component({
  selector: 'app-home-promotions',
  templateUrl: './home-promotions.component.html',
  styleUrls: ['./home-promotions.component.css']
})
export class HomePromotionsComponent implements OnInit {

  path: string = path.url;

  constructor() { }

  ngOnInit(): void {
  }

}
