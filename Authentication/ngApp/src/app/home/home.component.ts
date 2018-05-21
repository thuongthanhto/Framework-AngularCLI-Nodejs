import { Component, OnInit } from '@angular/core';
import { HomeService } from './../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events = [];

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this._homeService.getEvents().subscribe(
      res => this.events = res,
      err => console.log(err),
    );
  }

}
