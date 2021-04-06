import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ShoppingCartPopUp from './ShoppingCartPopUp';
import makeStore from '../../redux/store.js';
import { initCart, deleteCart, addItem } from '../../redux/shoppingCartReducer';

Enzyme.configure({ adapter: new Adapter() });

describe('Shopping cart pop up', () => {
  let store;
	let wrapper;

	beforeEach(() => {
		store = makeStore;
		store.dispatch(initCart());
    store.dispatch(deleteCart());

		wrapper = mount(
			<Provider store={store}>
        <BrowserRouter>
	        <ShoppingCartPopUp />
        </BrowserRouter>
			</Provider>
    );
  });

  test('Shopping cart pop up renders', () => {
		expect(wrapper.find(ShoppingCartPopUp).exists())
	    .toEqual(true);
	});

	test('Shopping cart pop up renders empty', () => {
		expect(wrapper.find(ShoppingCartPopUp).find('.cart-info').text())
      .toEqual('No items in cart');
	});

	test('Shopping cart pop up renders data', () => {
		store.dispatch(addItem('30954d90085f6eaaf5817917fc5fecb3'));

    expect(wrapper.find(ShoppingCartPopUp).find('.cart-info').text())
      .toEqual('1 item in cart');

		store.dispatch(addItem('30954d90085f6eaaf5817917fc5fecb3'));

    expect(wrapper.find(ShoppingCartPopUp).find('.cart-info').text())
      .toEqual('2 items in cart');
  });

	test('Shopping cart pop up class toggle', () => {
		expect(wrapper.find(ShoppingCartPopUp).find('.cart-items').prop('className'))
      .toContain('hide');

    const button = wrapper.find(ShoppingCartPopUp).find('.cart-icon');
		button.simulate('click');

		expect(wrapper.find(ShoppingCartPopUp).find('.cart-items').prop('className'))
      .toContain('show');
  });

  test('Shopping cart pop up renders product data', () => {
		store.dispatch(addItem('30954d90085f6eaaf5817917fc5fecb3'));

    const button = wrapper.find(ShoppingCartPopUp).find('.cart-icon');
    button.simulate('click');

    expect(wrapper.find(ShoppingCartPopUp).find('.cart-product').exists())
      .toEqual(true);

    expect(wrapper.find(ShoppingCartPopUp).find('.total-price').text())
      .toContain('Total:');
  });
});