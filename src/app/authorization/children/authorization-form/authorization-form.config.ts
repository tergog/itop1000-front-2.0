export const CAuthorizationFormConfigList = {
  logo: {
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
      error: 'The email is not correct, try again :('
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
      error: 'The email is not correct, try again :('
    },
    password: {
      placeholder: 'Your password',
      type: 'password',
      label: 'Password',
      error: 'The password is not correct, try again :('
    },
    phone: {
      placeholder: 'Phone',
      type: 'text',
      label: 'Phone',
      error: 'The phone is not correct, try again :('
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
      policy: {
        label: 'Accent Terms of Use and Privacy',
        errorMessage: 'Please, accept Terms of use and privacy'
      },
      terms: {
        label: 'Accept Privacy Policy',
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
