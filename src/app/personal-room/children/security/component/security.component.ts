import { Component } from '@angular/core';
import { CSecurityConfigList } from '../security.config';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent {
  public securityConfig = CSecurityConfigList;

}
