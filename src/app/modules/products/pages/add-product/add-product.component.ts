import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../../core/services/product.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { CategoryI } from 'src/app/modules/categories/models/cateogory.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  form: FormGroup;
  categories!: CategoryI[]

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private productS: ProductService,
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {
    this.form = this.initiForm()

    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }
  initiForm() {
    const randomNum = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    const imageDir = `https://robohash.org/${randomNum}`;

    return this.fb.group({
      name: [, [Validators.required]],
      category: ['Sin categoria', [Validators.required]],
      price: [, [Validators.required]],
      imageUrl: [imageDir, [Validators.required]],
    });
  }

  async onSubmit() {
    const product = await this.productS.addProduct(this.form.value).then(res => {
      this.toastr.success('Producto agregado correctamente')
      this.form = this.initiForm()
    }).catch();
  }

  toProducts() {
    this.router.navigate(['/dashboard/products']);
  }
}
