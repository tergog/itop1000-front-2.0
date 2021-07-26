import { Component, OnInit } from '@angular/core';
import { CAuthorizationData } from '../../../constantes/constantes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss']
})
export class AuthorizationFormComponent implements OnInit {

  public authorizationPageParameters = CAuthorizationData;
  public signUpFormGroup: FormGroup;
  public signInFormGroup: FormGroup;
  public invalid: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signUpFormGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required]),
      firstName: this.formBuilder.control('', [Validators.required]),
      lastName: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
      confirmPassword: this.formBuilder.control('', [Validators.required]),
      policy: this.formBuilder.control(false, [Validators.required]),
      terms: this.formBuilder.control(false, [Validators.required])
    });
    this.signInFormGroup = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
      remember: this.formBuilder.control(false, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  signIn(): void {

  }

  signUp(): void {
    if (this.signUpFormGroup.valid) {
      this.router.navigate(['/authorization/info']);
    }else{
      this.invalid = true;
    }
  }
}
