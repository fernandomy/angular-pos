import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { ProductModel } from '../../../../core/models/product.model';
import { ProductService } from '../../../../core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  products!: ProductModel[];

  constructor(
    private productService: ProductService,
    private confirmService: ConfirmService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  async delete(product: ProductModel) {
    const result = await this.confirmService.open(
      'Eliminar producto',
      '¿Esta seguro de realizar esta acción?'
    );

    if (result) {
      this.productService
        .deleteProduct(product)
        .then((res) => {
          this.toastr.success('Producto eliminado correctamente.');
        })
        .catch();
    }
  }

  goEditProduct(product: ProductModel) {
    this.router.navigate(['/dashboard/products/edit', product.id]);
  }
}
