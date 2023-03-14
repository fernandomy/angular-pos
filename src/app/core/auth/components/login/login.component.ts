import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authS: AuthService,
    private notificationS: NotificationService
  ) {
    // Inicializado el formulario y validaciones con formbuilder
    this.form = this.fb.group({
      email: ['admin@easypos.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.authS
        .login(this.form.value)
        .then((user) => {
          // console.log(user);
          this.router.navigate(['dashboard']);
        })
        .catch((error) => {
          // console.log(error);
          this.notificationS.firebaseError(error.code);
        });
    }
  }

  isValidField(name: string): boolean {
    const field = this.form.get(name);
    return !!(field?.touched && field.invalid);
  }

  toResetPassword() {
    this.router.navigate(['/reset-password']);
  }
}
