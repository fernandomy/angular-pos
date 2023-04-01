import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CarItemModel } from 'src/app/core/models/cart-item.model';
import { SaleItemModel } from 'src/app/core/models/sale-item.model';
import { addCartItem } from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-sale-item',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.css'],
})
export class SaleItemComponent {
  @Input() item!: SaleItemModel;

  constructor(private store: Store) {}

  addProductCart(itemSelected: SaleItemModel) {
    const itemCart: SaleItemModel = { ...itemSelected, quantity: 1 };
    this.store.dispatch(addCartItem({ item: itemCart }));
  }
}
