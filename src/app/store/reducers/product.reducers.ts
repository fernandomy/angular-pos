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
    console.log(action.products);
    return {
      ...state,
      loading: false,
      products: action.products,
    };
  })

  //   on(addToCart, (state, action) => {
  //     const findItem = state.itemsCart.find((item) => item.id === action.item.id);
  //     if (findItem) {
  //       const newItemsCart = state.itemsCart.map((item) =>
  //         item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item
  //       );
  //       return { ...state, itemsCart: newItemsCart };
  //     } else {
  //       return { ...state, itemsCart: [...state.itemsCart, action.item] };
  //     }
  //   }),

  //   on(removeItemCart, (state, action) => ({
  //     ...state,
  //     itemsCart: state.itemsCart.filter((item) => item.id !== action.item.id),
  //   })),

  //   on(increaseAmount, (state, action) => ({
  //     ...state,
  //     itemsCart: state.itemsCart.map((item) =>
  //       item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item
  //     ),
  //   })),

  //   on(decreaseAmount, (state, action) => ({
  //     ...state,
  //     itemsCart: state.itemsCart.map((item) =>
  //       item.id === action.item.id ? { ...item, amount: item.amount - 1 } : item
  //     ),
  //   }))
);
