import { ActionReducerMap } from '@ngrx/store';
import { CartStateModel } from '../core/models/cart-state.model';
import { ProductsStateModel } from '../core/models/product-state.model';
import { SaleStateModel } from '../core/models/sale-state.mode';
import { CartReducer } from './reducers/cart.reducers';
import { ProductReducer } from './reducers/product.reducer';
import { SaleReducer } from './reducers/sale.reducer';

export interface AppState {
  productState: ProductsStateModel;
  cartState: CartStateModel;
  saleState: SaleStateModel;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  productState: ProductReducer,
  cartState: CartReducer,
  saleState: SaleReducer,
};
