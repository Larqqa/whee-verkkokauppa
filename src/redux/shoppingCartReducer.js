import { createSlice } from '@reduxjs/toolkit'

const cartStorage = {
  get: () => {
    const storage = sessionStorage.getItem('whee-cart');

    if (storage) {
      return JSON.parse(storage);
    } else {
      cartStorage.set({});
      return {};
    }
  },
  set: (value) => {
    if (!value || typeof value !== "object") return;
    sessionStorage.setItem('whee-cart', JSON.stringify(value));
  }
}

export const ShoppingCart = createSlice({
  name: 'ShoppingCart',
  initialState: {},
  reducers: {
    initCart: () => {
      try {
        const cart = cartStorage.get();

        if (!cart) {
          cartStorage.set({});
        }

        console.log(cart);
        return cart;
      }
      catch(e) {
        return console.error(e);
      }

    },
    addItem: (state, action) => {
      const cart = cartStorage.get();
      const productId = action?.payload;
      if(!productId) return;
      if (cart[productId] >= 999) return;

      if (cart[productId]) {
        cart[productId] += 1;
      } else {
        cart[productId] = 1;
      }

      cartStorage.set(cart);
      return cart;
    },
    removeItem: (state, action) => {
      const cart = cartStorage.get();
      const productId = action?.payload;
      if(!productId) return;

      if (cart[productId] > 1) {
        cart[productId] -= 1;
      } else if(cart[productId] !== null) {
        delete cart[productId];
      }

      cartStorage.set(cart);
      return cart;
    },
    setItem: (state, action) => {
      const cart = cartStorage.get();
      const productId = action?.payload?.id;
      const amount = action?.payload?.amount;
      if(!productId || amount === undefined) return;
      if (amount > 999) return;

      if (amount < 1) {
        delete cart[productId];
      } else if (cart[productId]) {
        cart[productId] = amount;
      }

      cartStorage.set(cart);
      return cart;
    },
    deleteItem: (state, action) => {
      const cart = cartStorage.get();
      const productId = action?.payload;
      if(!productId) return;

      if(cart[productId] !== null) {
        delete cart[productId];
      }

      cartStorage.set(cart);
      return cart;
    },
    deleteCart: () => {
      cartStorage.set({});
      return {};
    },
  },
})

export const { initCart, addItem, removeItem, setItem, deleteItem, deleteCart } = ShoppingCart.actions

export default ShoppingCart.reducer