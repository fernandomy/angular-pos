import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [ValidationMessagesComponent, NotFoundComponent],
  imports: [CommonModule],
  exports: [ValidationMessagesComponent],
})
export class SharedModule {}
