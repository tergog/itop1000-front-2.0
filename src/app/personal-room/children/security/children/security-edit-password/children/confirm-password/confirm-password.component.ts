import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { SecurityPasswordStepperService } from '../../services/security-password-stepper/security-password-stepper.service';
import { CSecurityEditPasswordConfigList } from '../../security-edit-password.config';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {
  public step$: BehaviorSubject<number>;
  public securityEditConfig = CSecurityEditPasswordConfigList;
  public confirmPasswordGroup: FormGroup;

  constructor(
    private securityPasswordStepperService: SecurityPasswordStepperService,
    public router: Router
  ) {
    // this.step$ = ;
  }

  ngOnInit(): void {
    this.confirmPasswordGroup = new FormGroup({
      currentPassword: new FormControl(''),
      newPassword: new FormControl('')
    });
  }

  nextStep(): void {
    this.securityPasswordStepperService.editPasswordSteps$.next(1);
    // this.step$.next(1);
    console.log('asd');
  }

  cancelChangePassword(): void {
    this.router.navigate(['/personal-room/security']);
  }
}
