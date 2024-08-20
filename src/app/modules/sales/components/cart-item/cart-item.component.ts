import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { SaleItemModel } from 'src/app/core/models/sale-item.model';
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
  @Input() item!: SaleItemModel;

  constructor(private store: Store,private toastr: ToastrService) {}

  removeItem(item: SaleItemModel) {
    this.store.dispatch(removeCartItem({ item }));

    this.toastr.error(item.name, 'Eliminado del carrito');
  }

  increaseAmount(item: SaleItemModel) {
    this.store.dispatch(increaseCartitemQuantity({ item }));
  }
  decreaseAmount(item: SaleItemModel) {
    this.store.dispatch(decreaseCartitemQuantity({ item }));
  }
}
