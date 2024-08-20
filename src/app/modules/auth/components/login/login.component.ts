import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../../../shared/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authS: AuthService,
    private notificationS: NotificationService
  ) {
    // Inicializado el formulario y validaciones con formbuilder
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      this.authS
        .login(this.form.value)
        .then((user) => {
          // console.log(user);
          this.loading = false;
          this.router.navigate(['dashboard']);
        })
        .catch((error) => {
          // console.log(error);
          this.loading = false;
          this.form.patchValue({email:'', password: '' });
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

  credentialsTest() {
    this.form = this.fb.group({
      email: ['test@easypos.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    });
  }
}
