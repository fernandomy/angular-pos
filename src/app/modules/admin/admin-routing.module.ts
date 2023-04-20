import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'sales' },
      {
        path: 'products',
        loadChildren: () =>
          import('../../modules/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('../../modules/categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: 'sales',
        loadChildren: () =>
          import('../../modules/sales/sales.module').then((m) => m.SalesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
