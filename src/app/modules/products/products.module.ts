import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ListProductComponent } from './pages/list-product/list-product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditProdcutComponent } from './pages/edit-prodcut/edit-prodcut.component';

@NgModule({
  declarations: [ListProductComponent, AddProductComponent, EditProdcutComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule { }
