import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(password: string): ValidatorFn {
  return (control: AbstractControl) => {
    if (!control || !control.parent) {
      return null;
    }
    return control.parent.get(password)!.value === control.value ? null : { mismatch: true };
  };
}

export function confirmCheckboxValidator(controlName: string): ValidationErrors {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];

    if (control.value !== true) {
      control.setErrors({ confirmPasswordValidator: true });
    } else {
      control.setErrors(null);
    }
  };
}
