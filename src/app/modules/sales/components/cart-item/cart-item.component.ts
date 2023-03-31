import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CarItemModel } from 'src/app/core/models/cart-item.model';
import {
  decreaseCartitemQuantity,
  increaseCartitemQuantity,
  removeCartItem,
} from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() item!: CarItemModel;

  constructor(private store: Store) {}

  removeItem(item: CarItemModel) {
    this.store.dispatch(removeCartItem({ item }));
  }

  increaseAmount(item: CarItemModel) {
    this.store.dispatch(increaseCartitemQuantity({ item }));
  }
  decreaseAmount(item: CarItemModel) {
    this.store.dispatch(decreaseCartitemQuantity({ item }));
  }
}
