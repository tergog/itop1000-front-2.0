import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  experience = {
    companyName: 'Deal Design',
    jobTitle: 'Job Title' ,
    positionTitle: 'Position Title' ,
    jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' ,
    dateFrom: 1627979471000,
    dateTill: 1627979471000
  };

  constructor() { }

  ngOnInit(): void {
  }

}
