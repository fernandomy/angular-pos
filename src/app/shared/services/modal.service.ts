import { Injectable } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalRef!: NgbModalRef;

  constructor(private modal: NgbModal) { }

  open(component: any) {
    this.modalRef = this.modal.open(component, {
      backdrop: 'static',
      keyboard: false,
      centered: true,
    });
  }

  dismiss() {
    // Confirm
    this.modalRef.dismiss();
  }

  close() {
    // Cancel
    this.modalRef.close();
  }
}
