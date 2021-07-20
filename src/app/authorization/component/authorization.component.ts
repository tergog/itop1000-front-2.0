import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  public authorizationPageParameters = {

    logo: {
      big: {
        view: 'big'
      },
      empty: {
        view: 'empty'
      }
    },
    social: [
      { view: 'facebook-empty', href: '' },
      { view: 'google', href: '' },
      { view: 'apple', href: '' }
    ],
    loginFormElements: {
      email: {
        placeholder: 'email@example.com',
        type: 'email',
        label: 'Email',
        error: 'Please, enter required data'
      },
      password: {
        placeholder: 'Enter password',
        type: 'password',
        label: 'Password',
        error: 'The password is not correct, try again :('
      },
      checkbox: {
        label: 'Remember me',
        errorMessage: ''
      },
      buttonSubmit: {
        text: 'sign in',
        type: 'submit',
        view: 'big',
        disabled: false
      }
    },
    signUpFormElements: {
      email: {
        placeholder: 'email@example.com',
        type: 'email',
        label: 'Email',
        error: 'Please, enter required data'
      },
      password: {
        placeholder: 'Your password',
        type: 'password',
        label: 'Password',
        error: 'The password is not correct, try again :('
      },
      confirmPassword: {
        placeholder: 'Confirm password',
        type: 'password',
        label: 'Confirm Password',
        error: 'The password is not correct, try again :('
      },
      firstName: {
        placeholder: 'First name',
        type: 'text',
        label: 'First name',
        error: 'There is a mistake, check and enter the First name'
      },
      lastName: {
        placeholder: 'Last name',
        type: 'text',
        label: 'Last name',
        error: 'There is a mistake, check and enter the Last name'
      },
      checkbox: {
        pollicy: {
          label: 'Accent Terms of Use and Privace',
          errorMessage: 'Please, accept Terms of use and privace'
        },
        terms: {
          label: 'Accept Privacy Pollicy',
          errorMessage: 'Please, accept Privacy Policy'
        }
      },
      buttonSubmit: {
        text: 'sign up',
        type: 'submit',
        view: 'big',
        disabled: false
      }
    }

  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
