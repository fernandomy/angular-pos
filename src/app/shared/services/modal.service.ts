import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalRef!: NgbModalRef;

  constructor(private modal: NgbModal) {}

  open(component: any) {
    this.modalRef = this.modal.open(component, {
      backdrop: 'static',
      keyboard: false,
      centered: true,
    });
  }

  dismiss() {
    this.modalRef.dismiss();
  }

  close() {
    this.modalRef.close();
  }
}
