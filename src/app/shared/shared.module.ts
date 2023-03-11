import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValationMessagesComponent } from './components/valation-messages/valation-messages.component';

@NgModule({
  declarations: [ValationMessagesComponent],
  imports: [CommonModule],
  exports: [ValationMessagesComponent],
})
export class SharedModule {}
