import { ActionReducerMap } from '@ngrx/store';
import { CartStateModel } from '../core/models/cart-state.model';
import { ProductsStateModel } from '../core/models/product-state.model';
import { CartReducer } from './reducers/cart.reducers';
import { ProductReducer } from './reducers/product.reducers';

export interface AppState {
  productState: ProductsStateModel;
  cartState: CartStateModel;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  productState: ProductReducer,
  cartState: CartReducer,
};
