import { Component, Input } from '@angular/core';
import { ConfirmService } from '../../services/confirm.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
export class ConfirmComponent {
  @Input() title!: string;
  @Input() message!: string;

  constructor(private comfirmService: ConfirmService) {}

  dismiss() {
    this.comfirmService.dismiss();
  }
  close() {
    this.comfirmService.close();
  }
}
