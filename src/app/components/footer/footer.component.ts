import { Component, OnInit } from '@angular/core';
import { path } from '../../configurations/config';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  path: string = path.url;
  
  constructor() { }

  ngOnInit(): void {
  }

}
