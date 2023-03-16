import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [],
})
export class ModalComponent {
  @Output() actionSuccess = new EventEmitter();
  @Input() title: string = '';
  @Input() element: any;

  constructor(public modalService: ModalService) {}

  onSuccess() {
    this.actionSuccess.emit();
  }
  dismiss() {
    this.modalService.dismiss();
  }
}
