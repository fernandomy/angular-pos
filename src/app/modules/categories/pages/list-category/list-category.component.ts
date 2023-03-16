import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { ModalService } from 'src/app/shared/services/modal.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { CategoryI } from '../../models/cateogory.interface';
import { CategoryService } from '../../services/category.service';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css'],
})
export class ListCategoryComponent implements OnInit {
  categories!: CategoryI[];

  constructor(
    private categoryService: CategoryService,
    private confirmService: ConfirmService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  async delete(category: CategoryI) {
    const result = await this.confirmService.open(
      'Eliminar categoría',
      '¿Esta seguro de realizar esta acción?'
    );
    console.log(result);

    if (result) {
      this.categoryService
        .deleteCategory(category)
        .then((res) => {
          this.notificationService.success('Categoría eliminada');
        })
        .catch();
    }
  }

  goEditCategory(category: CategoryI) {
    this.router.navigate(['/dashboard/categories/edit', category.id]);
  }

  disabledCategory(category: CategoryI) {
    const data = { state: !category.state };
    this.categoryService.updateCategory(category.id, data).then(() => {
      if (!data.state) {
        this.notificationService.info('Categoria deshabilitada');
      } else {
        this.notificationService.success('Categoria habilitada');
      }
    });
  }
}
