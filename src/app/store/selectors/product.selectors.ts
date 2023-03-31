import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsStateModel } from 'src/app/core/models/product-state.model';

export const selectProductFeacture =
  createFeatureSelector<ProductsStateModel>('productState');

export const selectProducts = createSelector(
  selectProductFeacture,
  (state) => state.products
);

export const selectLoading = createSelector(
  selectProductFeacture,
  (state) => state.loading
);
