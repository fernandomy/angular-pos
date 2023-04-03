import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { FormsModule } from '@angular/forms';

import { FilterItemByNamePipe } from 'src/app/core/pipes/filter-item-by-name.pipe';
import { FilterItemByPricePipe } from 'src/app/core/pipes/filter-item-by-price.pipe';

import { SaleComponent } from './pages/sale/sale.component';
import { SaleItemListComponent } from './components/list-products-sale/sale-list-items.component';
import { SaleItemComponent } from './components/sale-item/sale-item.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';
import { SaleListComponent } from './pages/sale-list/sale-list.component';
import { SaleDetailComponent } from './components/sale-detail/sale-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SaleComponent,
    SaleItemListComponent,
    CartComponent,
    CartItemComponent,
    FilterItemByNamePipe,
    FilterItemByPricePipe,
    SaleItemComponent,
    SaleListComponent,
    SaleDetailComponent,
  ],
  imports: [CommonModule, SalesRoutingModule, FormsModule, SharedModule],
  providers: [NgbActiveModal]
})
export class SalesModule { }
