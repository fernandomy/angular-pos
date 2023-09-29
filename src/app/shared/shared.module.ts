import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ModalComponent } from './components/modal/modal.component';
import { PasswordValidationDirective } from './directives/password-validation.directive';

@NgModule({
  declarations: [
    ValidationMessagesComponent,
    NotFoundComponent,
    ConfirmComponent,
    ModalComponent,
    PasswordValidationDirective,
  ],
  imports: [CommonModule],
  exports: [
    ValidationMessagesComponent,
    ModalComponent,
    PasswordValidationDirective,
  ],
})
export class SharedModule {}
