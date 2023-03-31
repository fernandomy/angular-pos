import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartStateModel } from 'src/app/core/models/cart-state.model';

export const selectCartFeacture =
  createFeatureSelector<CartStateModel>('cartState');

export const selectCartItems = createSelector(
  selectCartFeacture,
  (state) => state.cartItems
);
