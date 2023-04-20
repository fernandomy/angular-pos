import { createReducer, on } from '@ngrx/store';
import { ProductsStateModel } from 'src/app/core/models/product-state.model';
import { loadedProducts, loadProducts } from '../actions/products.actions';

export const initialState: ProductsStateModel = {
  loading: false,
  products: [],
};

export const ProductReducer = createReducer(
  initialState,

  on(loadProducts, (state) => ({
    ...state,
    loading: true,
  })),

  on(loadedProducts, (state, action) => {
    // console.log(action.products);
    return {
      ...state,
      loading: false,
      products: action.products,
    };
  })
);
