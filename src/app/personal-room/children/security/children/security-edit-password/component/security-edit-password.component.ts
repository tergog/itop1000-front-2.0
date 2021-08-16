import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { SecurityPasswordStepperService } from '../../../services/security-password-stepper/security-password-stepper.service';

@Component({
  selector: 'app-security-edit-password',
  templateUrl: './security-edit-password.component.html',
  styleUrls: ['./security-edit-password.component.scss']
})
export class SecurityEditPasswordComponent {
  public step$: BehaviorSubject<number>;

  constructor(private securityPasswordStepperService: SecurityPasswordStepperService) {
    this.step$ = this.securityPasswordStepperService.editPasswordSteps$;
  }
}
