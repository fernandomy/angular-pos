import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { CategoryI } from '../../models/cateogory.interface';
import { CategoryService } from '../../services/category.service';

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
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  async delete(category: CategoryI) {
    const result = await this.confirmService.open(
      'Eliminar categoría',
      'Esta acción es irreversible. ¿Esta seguro?'
    );

    if (result) {
      this.categoryService
        .deleteCategory(category)
        .then((res) => {
          this.toastr.success('Categoria eliminada correctamente.');
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
        this.toastr.info('Categoria desactivada');
      } else {
        this.toastr.success('Categoria disponible');
      }
    });
  }
}
