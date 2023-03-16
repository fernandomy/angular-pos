import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styles: [],
})
export class ValidationMessagesComponent {
  @Input() field: any;

  isValidField(): boolean {
    return !!(this.field?.touched && this.field.invalid);
  }
}
