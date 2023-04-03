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

export const setSaleActive = createAction(
  '[Sale list] Set sale active',
  props<{ sale: SaleModel }>()
);
// Delete sale
export const deleteSale = createAction(
  '[Sale list] Delete sale',
  props<{ sale: SaleModel }>()
);
export const deletedSale = createAction(
  '[Sale list] Deleted sale',
  props<{ sale: SaleModel }>()
);

// Load SaleItems
export const loadSaleItems = createAction(
  '[Sale list] Load sale items',
  props<{ sale: SaleModel }>()
);
export const loadedSaleItems = createAction(
  '[Sale list] Loaded sale items',
  props<{ sale: SaleModel; saleItems: SaleItemModel[] }>()
);
