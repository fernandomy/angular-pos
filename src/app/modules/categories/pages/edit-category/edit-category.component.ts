import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { CategoryI } from '../../models/cateogory.interface';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit {
  form!: FormGroup;
  category!: CategoryI;
  id!: string;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getId();
    this.getCategory();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [this.category?.name, [Validators.required]],
      state: [this.category?.state],
    });
  }

  getId() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  getCategory() {
    this.categoryService.getCategory(this.id).subscribe({
      next: (res) => {
        this.category = res;
        this.initForm();
      },
    });
  }

  onSubmit() {
    this.categoryService
      .updateCategory(this.id, this.form.value)
      .then((res) => {
        console.log(res);
        this.router.navigate(['/dashboard/categories']);
      });
  }
}
