import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ShoppingCart from './ShoppingCart';
import makeStore from '../redux/store.js';
import { initCart, deleteCart, addItem } from '../redux/shoppingCartReducer';

Enzyme.configure({ adapter: new Adapter() });

describe('Empty shopping cart', () => {
  let store;
	let wrapper;

	beforeEach(() => {
		store = makeStore;
		store.dispatch(initCart());
    store.dispatch(deleteCart());

		wrapper = mount(
			<Provider store={store}>
        <BrowserRouter>
	        <ShoppingCart />
        </BrowserRouter>
			</Provider>
    );
  });

  test('ShoppingCart renders empty', () => {
    expect(wrapper.find(ShoppingCart).find('.shopping-cart-component').find('h2').text())
      .toEqual('Your cart is empty.');

    expect(wrapper.find(ShoppingCart).find('.shopping-cart-component').find('a').text())
      .toEqual('Back to shop');
  });
});

describe('Filled shopping cart', () => {
  let store;
	let wrapper;

	beforeEach(() => {
		store = makeStore;
		store.dispatch(initCart());
    store.dispatch(deleteCart());

    store.dispatch(addItem('30954d90085f6eaaf5817917fc5fecb3'));

		wrapper = mount(
			<Provider store={store}>
        <BrowserRouter>
	        <ShoppingCart />
        </BrowserRouter>
			</Provider>
    );
  });

	test('ShoppingCart renders', () => {
		expect(wrapper.find(ShoppingCart).exists())
	    .toEqual(true);
	});

	test('ShoppingCart renders price from product', () => {
		store.dispatch(addItem('30954d90085f6eaaf5817917fc5fecb3'));

    expect(wrapper.find(ShoppingCart).find('.total-price').find('span').text())
      .toEqual('Total Price:');
  });

	test('ShoppingCart can be cleared', () => {
    const button = wrapper.find(ShoppingCart).find('.delete-cart')
		button.simulate('click');

		expect(wrapper.find(ShoppingCart).find('.shopping-cart-component').find('h2').text())
      .toEqual('Your cart is empty.');
  });
});