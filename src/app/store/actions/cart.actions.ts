import { createAction, props } from '@ngrx/store';
import { CarItemModel } from 'src/app/core/models/cart-item.model';

export const addCartItem = createAction(
  '[List Products Sale] Add to cart',
  props<{ item: CarItemModel }>()
);

export const removeCartItem = createAction(
  '[Cart item] Remove item cart',
  props<{ item: CarItemModel }>()
);

export const increaseCartitemQuantity = createAction(
  '[Cart item] Increase amount item',
  props<{ item: CarItemModel }>()
);

export const decreaseCartitemQuantity = createAction(
  '[Cart item] Decrease amount item',
  props<{ item: CarItemModel }>()
);
