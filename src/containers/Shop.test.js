import React from 'react';
import { Provider } from 'react-redux'
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Shop from './Shop';
import makeStore from '../redux/store.js';
import { initCart, deleteCart } from '../redux/shoppingCartReducer';

Enzyme.configure({ adapter: new Adapter() });

describe('The Shop', () => {
  let store;
	let wrapper;

	beforeEach(() => {
		store = makeStore;
		store.dispatch(initCart());
    store.dispatch(deleteCart());

		wrapper = mount(
			<Provider store={store}>
	      <Shop />
			</Provider>
    );
  });

	test('Shop renders', () => {
		expect(wrapper.find(Shop).exists())
	    .toEqual(true);
	});

	test('Shop renders products', () => {
    expect(wrapper.find(Shop).find('.product').exists())
      .toEqual(true);
  });

	test('Product can be added to cart', async() => {
    const button = wrapper.find(Shop).find('.add-to-cart').at(0);
    button.simulate('click');
    button.simulate('click');

		expect(Object.keys(store.getState().ShoppingCart).length)
			.toEqual(1);

		expect(Object.values(store.getState().ShoppingCart)[0])
			.toEqual(2)
  });
});