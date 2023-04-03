import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SaleStateModel } from 'src/app/core/models/sale-state.mode';

export const selectSalesFeacture =
  createFeatureSelector<SaleStateModel>('saleState');

export const selectSales = createSelector(
  selectSalesFeacture,
  (state) => state.sales
);

export const selectSaleActive = createSelector(
  selectSalesFeacture,
  (state) => state.saleActive
);

export const selectSaleItemsActive = createSelector(
  selectSalesFeacture,
  (state) => state.saleItemsActive
);

export const selectLoading = createSelector(
  selectSalesFeacture,
  (state) => state.loading
);
