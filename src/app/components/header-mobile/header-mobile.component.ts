import { Component, OnInit } from '@angular/core';
import { path } from '../../configurations/config';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {

  path: string = path.url;


  constructor() { }

  ngOnInit(): void {
  }

}
