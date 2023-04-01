import { createAction, props } from '@ngrx/store';
import { SaleItemModel } from 'src/app/core/models/sale-item.model';
import { SaleModel } from 'src/app/core/models/sale.model';

export const saveSale = createAction(
  '[Cart] Save sale',
  props<{ sale: SaleModel; items: SaleItemModel[] }>()
);

export const savedSale = createAction(
  '[Cart] Saved sale',
  props<{ sale: SaleModel; items: SaleItemModel[] }>()
);

export const saveItemFailure = createAction(
  '[Cart] Save Item Failure',
  props<{ error: any }>()
);

export const loadSales = createAction('[Sale history] Load sales');

export const loadedSales = createAction(
  '[Sale history] Loaded sales',
  props<{ sales: SaleModel[] }>()
);
