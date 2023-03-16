import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from '../components/confirm/confirm.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {
  private modalmRef!: NgbModalRef;
  constructor(private modalService: NgbModal) {}

  open(title: string, message: string): Promise<boolean> {
    this.modalmRef = this.modalService.open(ConfirmComponent);
    this.modalmRef.componentInstance.title = title;
    this.modalmRef.componentInstance.message = message;
    return this.modalmRef.result.then(
      (result) => {
        // Si el usuario hace clic en "Aceptar"
        console.log('pos');

        return true;
      },
      (reason) => {
        // Si el usuario hace clic en "Cancelar" o hace clic fuera del modal
        console.log('neg');

        return false;
      }
    );
  }

  dismiss() {
    this.modalmRef.dismiss();
  }

  close() {
    this.modalmRef.close();
  }
}
