import { Component, OnInit } from '@angular/core';
import { CAuthorizationData } from '../../../constantes/constantes';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss']
})
export class AuthorizationFormComponent implements OnInit {

  public authorizationPageParameters = CAuthorizationData;
  public signUpFormGroup: FormGroup;
  public signInFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signUpFormGroup = this.formBuilder.group({
      email: this.formBuilder.control('', []),
      firstName: this.formBuilder.control('', []),
      lastName: this.formBuilder.control('', []),
      password: this.formBuilder.control('', []),
      confirmPassword: this.formBuilder.control('', []),
      policy: this.formBuilder.control(false, []),
      terms: this.formBuilder.control(false, [])
    });
    this.signInFormGroup = this.formBuilder.group({
      email: this.formBuilder.control('', []),
      password: this.formBuilder.control('', []),
      remember: this.formBuilder.control(false, [])
    });
  }

  ngOnInit(): void {
  }

}
