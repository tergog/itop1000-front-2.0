import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { SecurityInfoStepperService } from '../../../services/security-info-stepper/security-info-stepper.service';

@Component({
  selector: 'app-security-edit',
  templateUrl: './security-edit.component.html',
  styleUrls: ['./security-edit.component.scss']
})
export class SecurityEditComponent {
  public step$: BehaviorSubject<number>;

  constructor(private securityInfoStepperService: SecurityInfoStepperService) {
    this.step$ = this.securityInfoStepperService.editInfoSteps$;
  }
}
