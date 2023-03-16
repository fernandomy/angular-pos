import { Component, OnInit } from '@angular/core';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ProductI } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  products!: ProductI[];

  constructor(
    private productService: ProductService,
    private notificationS: NotificationService,
    private confirmService: ConfirmService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  async delete(product: ProductI) {
    const result = await this.confirmService.open(
      'Eliminar producto',
      '¿Esta seguro de realizar esta acción?'
    );
    console.log(result);

    if (result) {
      this.productService
        .deleteProduct(product)
        .then((res) => {
          this.notificationS.success('Producto eliminado');
        })
        .catch();
    }
  }
}
