export const CSecurityEditPasswordConfigList = {
  inputs: {
    currentPassword: {
      placeholder: 'Enter password',
      type: 'password',
      label: 'Enter your current password',
      error: 'The password is not correct, try again :('
    },
    confirmPassword: {
      placeholder: 'Enter password',
      type: 'password',
      label: 'Confirm Password',
      error: 'The password is not correct, try again :('
    },
    newPassword: {
      placeholder: 'Enter password',
      type: 'password',
      label: 'Enter new password',
      error: 'The password is not correct, try again :('
    },
    password: {
      placeholder: 'Enter password',
      type: 'password',
      label: 'Password',
      error: 'The password is not correct, try again :('
    }
  },
  buttons: {
    confirm: {
      text: 'Confirm',
      type: '',
      view: 'medium',
      disabled: false
    },
    back: {
      text: 'Back',
      type: '',
      view: 'small-empty',
      disabled: false
    },
    cancel: {
      text: 'Cancel',
      type: '',
      view: 'small-empty',
      disabled: false
    }
  }
};
