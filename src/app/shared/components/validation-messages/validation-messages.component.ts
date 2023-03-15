import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styles: [],
})
export class ValidationMessagesComponent implements OnInit {
  @Input() field: any;
  ngOnInit(): void {
    console.log(this.field);
  }

  isValidField(): boolean {
    return !!(this.field?.touched && this.field.invalid);
  }
}
