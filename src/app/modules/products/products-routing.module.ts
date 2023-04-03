import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { EditProdcutComponent } from './pages/edit-prodcut/edit-prodcut.component';

const routes: Routes = [
  { path: '', component: ListProductComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'edit/:id', component: EditProdcutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }
