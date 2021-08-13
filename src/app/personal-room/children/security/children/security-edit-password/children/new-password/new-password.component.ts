import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { SecurityPasswordStepperService } from '../../services/security-password-stepper/security-password-stepper.service';
import { CSecurityEditPasswordConfigList } from '../../security-edit-password.config';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
  public step$: BehaviorSubject<number>;
  public securityEditConfig = CSecurityEditPasswordConfigList;
  public newPasswordGroup: FormGroup;

  constructor(
    private securityPasswordStepperService: SecurityPasswordStepperService,
    public router: Router
  ) {
    this.step$ = this.securityPasswordStepperService.editPasswordSteps$;
  }

  ngOnInit(): void {
    this.newPasswordGroup = new FormGroup({
      newPassword: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }

  confirmNewPassword(): void {

  }

  cancelChangePassword(): void {
    this.router.navigate(['/personal-room/security']);
  }

}
