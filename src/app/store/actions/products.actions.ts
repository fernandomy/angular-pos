import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/core/models/product.model';

export const loadProducts = createAction('[Sale Page] Load products');

export const loadedProducts = createAction(
  '[List Product Sale] Loaded products',
  props<{ products: ProductModel[] }>()
);
