import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  public logo = {
    view: 'big'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
