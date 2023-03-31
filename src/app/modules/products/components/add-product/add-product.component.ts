import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../../core/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private productS: ProductService
  ) {
    const randomNum = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    const imageDir = `https://robohash.org/${randomNum}`;
    this.form = this.fb.group({
      name: [, [Validators.required]],
      category: [, [Validators.required]],
      price: [, [Validators.required]],
      imageUrl: [imageDir, [Validators.required]],
    });
  }

  async onSubmit() {
    const product = await this.productS.addProduct(this.form.value);
    console.log(product);
  }

  toProducts() {
    this.router.navigate(['/dashboard/products']);
  }
}
