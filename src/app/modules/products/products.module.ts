import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductComponent } from './components/list-product/list-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [ListProductComponent, AddProductComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
