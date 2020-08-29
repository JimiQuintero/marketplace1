import { Component, OnInit } from '@angular/core';
import { path } from '../../configurations/config';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  path: string = path.url;
  
  constructor() { }

  ngOnInit(): void {
  }

}
