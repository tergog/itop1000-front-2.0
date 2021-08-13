import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { SecurityPasswordStepperService } from '../../services/security-password-stepper/security-password-stepper.service';
import { CSecurityEditPasswordConfigList } from '../../security-edit-password.config';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  public step$: BehaviorSubject<number>;
  public securityEditConfig = CSecurityEditPasswordConfigList;
  public authenticationPasswordGroup: FormGroup;

  constructor(private securityPasswordStepperService: SecurityPasswordStepperService) {
    this.step$ = this.securityPasswordStepperService.editPasswordSteps$;
  }

  ngOnInit(): void {
    this.authenticationPasswordGroup = new FormGroup({
      code: new FormControl('')
    });
  }

}
