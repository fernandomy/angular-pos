import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductModel } from 'src/app/core/models/product.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { ProductService } from 'src/app/core/services/product.service';
import { CategoryI } from 'src/app/modules/categories/models/cateogory.interface';

@Component({
  selector: 'app-edit-prodcut',
  templateUrl: './edit-prodcut.component.html',
  styleUrls: ['./edit-prodcut.component.css']
})
export class EditProdcutComponent {
  form: FormGroup;
  categories!: CategoryI[]
  product!: ProductModel
  id!: string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private toastr: ToastrService,
  ) {
    this.getId()
    this.getProduct()
    this.form = this.initForm()

    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  initForm() {
    // const randomNum = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    // const imageDir = `https://robohash.org/${randomNum}`;

    return this.fb.group({
      name: [this.product?.name, [Validators.required]],
      category: [this.product?.category, [Validators.required]],
      price: [this.product?.price, [Validators.required]],
      imageUrl: [this.product?.imageUrl, [Validators.required]],
    });
  }

  toProducts() {
    this.router.navigate(['/dashboard/products']);
  }

  getId() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  getProduct() {
    this.productService.getProductById(this.id).subscribe({
      next: (res) => {
        this.product = res;
        this.form = this.initForm()
      },
    });
  }

  onSubmit() {
    this.productService
      .updateProduct(this.id, this.form.value)
      .then((res) => {
        this.toastr.success('Datos de producto actualizado')
        this.router.navigate(['/dashboard/products']);
      });
  }
}
