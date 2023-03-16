import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from 'src/app/shared/services/modal.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private notificationService: NotificationService
  ) {
    this.form = this.initForm();
  }

  initForm() {
    return this.fb.group({
      name: [, [Validators.required]],
      state: [true],
    });
  }

  onSubmit() {
    this.categoryService
      .addCategory(this.form.value)
      .then((resp) => {
        this.notificationService.success('Categoria creada correctamente.');
      })
      .catch();
  }
}
