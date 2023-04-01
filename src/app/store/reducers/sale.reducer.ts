import { createReducer, on } from '@ngrx/store';
import { SaleStateModel } from 'src/app/core/models/sale-state.mode';
import { savedSale, saveItemFailure, saveSale } from '../actions/sale.actions';

export const initialState: SaleStateModel = {
  sales: [],
  loading: false,
  error: '',
};

export const SaleReducer = createReducer(
  initialState,

  on(saveSale, (state) => ({
    ...state,
    loading: true,
  })),

  on(savedSale, (state, action) => {
    console.log(action.sale);
    return {
      ...state,
      loading: false,
      sales: [...state.sales, action.sale],
    };
  }),
  on(saveItemFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
