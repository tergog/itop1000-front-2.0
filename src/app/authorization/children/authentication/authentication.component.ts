import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  public readonly authenticationForm: FormGroup = new FormGroup({
    authCode: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor() {
  }

}
