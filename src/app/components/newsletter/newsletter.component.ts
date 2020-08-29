import { Component, OnInit } from '@angular/core';
import { path } from '../../configurations/config';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  path: string = path.url;
  
  constructor() { }

  ngOnInit(): void {
  }

}
