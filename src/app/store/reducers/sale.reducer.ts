import { createReducer, on } from '@ngrx/store';
import { SaleStateModel } from 'src/app/core/models/sale-state.mode';
import {
  deletedSale,
  deleteSale,
  loadedSaleItems,
  loadedSales,
  loadSaleItems,
  loadSales,
  savedSale,
  saveItemFailure,
  saveSale,
  setSaleActive,
} from '../actions/sale.actions';

export const initialState: SaleStateModel = {
  sales: [],
  saleActive: { date: 0, total: 0 },
  saleItemsActive: [],
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
  })),

  on(loadSales, (state) => ({
    ...state,
    loading: true,
  })),

  on(loadedSales, (state, action) => {
    return {
      ...state,
      loading: false,
      sales: action.sales,
    };
  }),

  on(setSaleActive, (state, { sale }) => ({
    ...state,
    saleActive: sale,
  })),

  // Reducers delete sale
  on(deleteSale, (state) => {
    return { ...state, loading: true };
  }),

  on(deletedSale, (state, action) => {
    return {
      ...state,
      loading: false,
      sales: state.sales.filter((sale) => sale !== action.sale),
    };
  }),

  // Load Sale Items
  on(loadSaleItems, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedSaleItems, (state, action) => {
    return { ...state, loading: false, saleItemsActive: action.saleItems };
  })
);
