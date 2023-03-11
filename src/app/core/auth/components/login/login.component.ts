import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  sent: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializado el formulario y validaciones con formbuilder
    this.form = this.fb.group({
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.sent = true;
    if (this.form.valid) {
      console.log('el formulario es valido');
    }
  }

  isValidField(name: string): boolean {
    const field = this.form.get(name);
    return !!((field?.touched && field.invalid) || this.sent);
  }
}
