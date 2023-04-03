import { createAction, props } from '@ngrx/store';
import { SaleItemModel } from 'src/app/core/models/sale-item.model';

export const addCartItem = createAction(
  '[List Products Sale] Add to cart',
  props<{ item: SaleItemModel }>()
);

export const removeCartItem = createAction(
  '[Cart item] Remove item cart',
  props<{ item: SaleItemModel }>()
);

export const increaseCartitemQuantity = createAction(
  '[Cart item] Increase amount item',
  props<{ item: SaleItemModel }>()
);

export const decreaseCartitemQuantity = createAction(
  '[Cart item] Decrease amount item',
  props<{ item: SaleItemModel }>()
);

export const emptyCart = createAction('[Cart] Empty cart');
