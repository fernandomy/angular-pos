import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    ValidationMessagesComponent,
    NotFoundComponent,
    ConfirmComponent,
    ModalComponent,
  ],
  imports: [CommonModule],
  exports: [ValidationMessagesComponent, ModalComponent],
})
export class SharedModule {}
