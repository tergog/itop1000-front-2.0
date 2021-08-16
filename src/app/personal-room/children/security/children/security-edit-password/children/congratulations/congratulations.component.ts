import { Component } from '@angular/core';
import { SecurityPasswordStepperService } from '../../../../services/security-password-stepper/security-password-stepper.service';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.scss']
})
export class CongratulationsComponent {

  constructor(private securityPasswordStepperService: SecurityPasswordStepperService) {
  }

  resetEditPasswordStepper(): void {
    this.securityPasswordStepperService.editPasswordSteps$.next(0);
  }
}
