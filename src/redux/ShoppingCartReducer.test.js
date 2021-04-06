import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import makeStore from '../redux/store.js';
import { initCart, addItem, removeItem, deleteCart, deleteItem, setItem } from '../redux/shoppingCartReducer';

Enzyme.configure({ adapter: new Adapter() });

describe('The Redux store', () => {
  let store;

  beforeEach(() => {
		store = makeStore;
		store.dispatch(initCart());
		store.dispatch(deleteCart());
  });

  test('Initialized cart is empty object', async() => {
    expect(store.getState().ShoppingCart)
      .toEqual({});
  });

  test('Dispatching to sessionStorage works', async() => {
    store.dispatch(addItem('test_product'));
    const cart = sessionStorage.getItem('whee-cart');

    expect(cart)
      .toEqual('{"test_product":1}');

    expect(JSON.parse(cart))
      .toEqual({test_product: 1});
  });

  test('Removing from sessionStorage form dispatch works', async() => {
    store.dispatch(addItem('test_product'));
    store.dispatch(removeItem('test_product'));
    const cart = sessionStorage.getItem('whee-cart');

    expect(cart)
      .toEqual('{}');

    expect(JSON.parse(cart))
      .toEqual({});
  });

	test('Product can be added to cart', async() => {
    store.dispatch(addItem('test_product'));

    expect(store.getState().ShoppingCart)
      .toMatchObject({'test_product': 1});
  });

  test('Product can be removed from cart', async() => {
    store.dispatch(addItem('test_product'));
    store.dispatch(addItem('test_product'));
    store.dispatch(removeItem('test_product'));

    expect(store.getState().ShoppingCart)
      .toMatchObject({'test_product': 1});
  });

  test('Product can be deleted', async() => {
    store.dispatch(addItem('test_product'));
    store.dispatch(deleteItem('test_product'));

    expect(store.getState().ShoppingCart)
      .toEqual({});
  });

  test('Product amount can be set', async() => {
    store.dispatch(setItem({
      'id': 'test_product',
      'amount': 100
    }));

    expect(store.getState().ShoppingCart)
      .toEqual({});

    store.dispatch(addItem('test_product'));

    expect(store.getState().ShoppingCart)
      .toMatchObject({'test_product': 1});

    store.dispatch(setItem({
        'id': 'test_product',
        'amount': 100
      }));

    expect(store.getState().ShoppingCart)
      .toMatchObject({'test_product': 100});
  });

  test('Cart can be deleted', async() => {
    store.dispatch(addItem('test_product1'));
    store.dispatch(addItem('test_product2'));
    store.dispatch(addItem('test_product3'));

    expect(Object.keys(store.getState().ShoppingCart).length)
      .toEqual(3);

    store.dispatch(deleteCart());

    expect(store.getState().ShoppingCart)
      .toEqual({});
  });
});