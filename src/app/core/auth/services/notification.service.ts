import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  firebaseError(code: string) {
    switch (code) {
      case 'auth/user-not-found':
        this.toastr.error('El usuario no existe.', 'Error');
        return;
      case 'auth/wrong-password':
        this.toastr.error('La contraseña es incorrecta.', 'Error');
        return;
      // Este error se muestra  por varios intetos fallidos
      case 'auth/too-many-requests':
        this.toastr.error('Usuario deshabilitado temporalmente.', 'Error');
        return;
      default:
        return 'Error desconocido';
    }
  }

  success(message: string) {
    this.toastr.success(message, 'Ok');
  }
}
