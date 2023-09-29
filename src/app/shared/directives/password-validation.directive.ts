import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[passwordValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidationDirective,
      multi: true,
    },
  ],
})
export class PasswordValidationDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const password = <string>control.value;

    if (!/\d/.test(password)) {
      return {
        passwordValidation: {
          message: 'La contraseña debe tener almenos un número',
        },
      };
    }
    return null;
  }
}
