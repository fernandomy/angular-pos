import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorsService {
  constructor() {}

  message(code: string) {
    switch (code) {
      case '':
        return;
      case '':
        return;
      default:
        return 'Error desconocido';
    }
  }
}
