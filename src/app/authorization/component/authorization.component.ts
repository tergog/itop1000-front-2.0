import { Component } from '@angular/core';

import { CAuthorizationConfigList } from '../authorization.config';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {

public authorizationConfig = CAuthorizationConfigList;
  constructor() {}

}
