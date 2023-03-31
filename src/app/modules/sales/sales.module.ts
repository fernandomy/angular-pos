import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { FormsModule } from '@angular/forms';

import { SaleComponent } from './pages/sale/sale.component';
import { SaleItemListComponent } from './components/list-products-sale/sale-item-list.component';
import { SaleItemComponent } from './components/sale-item/sale-item.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';

import { FilterItemByNamePipe } from 'src/app/core/pipes/filter-item-by-name.pipe';
import { FilterItemByPricePipe } from 'src/app/core/pipes/filter-item-by-price.pipe';

@NgModule({
  declarations: [
    SaleComponent,
    SaleItemListComponent,
    CartComponent,
    CartItemComponent,
    FilterItemByNamePipe,
    FilterItemByPricePipe,
    SaleItemComponent,
  ],
  imports: [CommonModule, SalesRoutingModule, FormsModule],
})
export class SalesModule {}
