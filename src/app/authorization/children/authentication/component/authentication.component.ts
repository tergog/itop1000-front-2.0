import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EAuthenticationFormStatus } from '../authentication.enums';
import { AuthorizationService } from '../../../services/authorization/authorization.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnDestroy{
  public unsubscribe$ = new Subject<void>();
  public readonly authenticationForm: FormGroup = new FormGroup({
    authCode: new FormControl(
      '',
      [Validators.required, Validators.minLength(6)]
    )
  });

  constructor(private authorizationData: AuthorizationService) {
    this.authenticationForm.statusChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(status => {
      if (status === EAuthenticationFormStatus.Valid) {
        this.authorizationData.setGoogleSignInData(this.authenticationForm.value);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
