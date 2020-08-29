import { Component, OnInit } from '@angular/core';
import { path } from '../../configurations/config';


@Component({
  selector: 'app-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.css']
})
export class HeaderPromotionComponent implements OnInit {

  path: string = path.url;


  constructor() { }

  ngOnInit(): void {
  }

}
