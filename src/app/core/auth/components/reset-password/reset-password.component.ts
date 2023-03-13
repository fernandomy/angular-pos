import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authS: AuthService,
    private notificationS: NotificationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [, [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    const email = this.form.value.email;
    this.authS
      .resetPassword(email)
      .then((res) => {
        console.log();
        this.notificationS.success('Se envio un link a su correo.');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.notificationS.firebaseError(error.code);
      });
  }

  toLogin() {
    this.router.navigate(['/login']);
  }

  isValidField(name: string): boolean {
    const field = this.form.get(name);
    return !!(field?.touched && field.invalid);
  }
}
