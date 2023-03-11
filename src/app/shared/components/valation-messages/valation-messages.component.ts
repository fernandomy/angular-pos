import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-valation-messages',
  templateUrl: './valation-messages.component.html',
  styles: [],
})
export class ValationMessagesComponent {
  @Input() errors!: ValidationErrors[string];
}
