import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValationMessagesComponent } from './components/valation-messages/valation-messages.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [ValationMessagesComponent, NotFoundComponent],
  imports: [CommonModule],
  exports: [ValationMessagesComponent],
})
export class SharedModule {}
