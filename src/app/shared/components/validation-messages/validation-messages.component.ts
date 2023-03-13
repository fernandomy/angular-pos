import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styles: [],
})
export class ValidationMessagesComponent {
  @Input() errors!: ValidationErrors[string];
}
