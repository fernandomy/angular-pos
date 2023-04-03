import { createReducer, on } from '@ngrx/store';
import { CartStateModel } from 'src/app/core/models/cart-state.model';
import {
  addCartItem,
  decreaseCartitemQuantity,
  emptyCart,
  increaseCartitemQuantity,
  removeCartItem,
} from '../actions/cart.actions';

export const initialState: CartStateModel = {
  cartItems: [],
};

export const CartReducer = createReducer(
  initialState,

  on(addCartItem, (state, action) => {
    const findItem = state.cartItems.find(
      (cartItem) => cartItem.id === action.item.id
    );
    if (findItem) {
      const newItemsCart = state.cartItems.map((item) =>
        item.id === action.item.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, cartItems: newItemsCart };
    } else {
      return { ...state, cartItems: [...state.cartItems, action.item] };
    }
  }),

  on(removeCartItem, (state, action) => ({
    ...state,
    cartItems: state.cartItems.filter(
      (cartItem) => cartItem.id !== action.item.id
    ),
  })),

  on(increaseCartitemQuantity, (state, action) => ({
    ...state,
    cartItems: state.cartItems.map((cartItem) =>
      cartItem.id === action.item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ),
  })),

  on(decreaseCartitemQuantity, (state, action) => ({
    ...state,
    cartItems: state.cartItems.map((cartItem) =>
      cartItem.id === action.item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    ),
  })),

  on(emptyCart, (state) => {
    return { ...state, cartItems: [] };
  })
);
