import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

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
    this.form = this.fb.group({
      name: [, [Validators.required]],
      category: [, [Validators.required]],
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
