import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicializado el formulario y validaciones con formbuilder
    this.form = this.fb.group({
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
