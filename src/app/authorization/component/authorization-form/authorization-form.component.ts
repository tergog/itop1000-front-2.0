import { Component, OnInit } from '@angular/core';
import { CAuthorizationData } from '../../../constantes/constantes';

@Component({
  selector: 'app-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss']
})
export class AuthorizationFormComponent implements OnInit {

  public authorizationPageParameters = CAuthorizationData;

  constructor() { }

  ngOnInit(): void {
  }

}
