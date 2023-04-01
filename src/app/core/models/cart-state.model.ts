import { CarItemModel } from './cart-item.model';
import { SaleItemModel } from './sale-item.model';

export interface CartStateModel {
  cartItems: SaleItemModel[];
}
