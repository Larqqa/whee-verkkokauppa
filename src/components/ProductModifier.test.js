import React from 'react';
import { Provider } from 'react-redux'
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProductModifier from './ProductModifier';
import { formatPrice } from '../services/shopInfo';
import makeStore from '../redux/store.js';
import { initCart, deleteCart, addItem } from '../redux/shoppingCartReducer';

Enzyme.configure({ adapter: new Adapter() });

const mockProduct = {
  "id": "30954d90085f6eaaf5817917fc5fecb3",
  "image": "/images/circle.png",
  "alt": "Circle product",
  "name": "Circle",
	"description": "Perfect choice when\nyou don't need any corners.",
  "price": 999
};

describe('The Product Modifier', () => {
  let store;
	let wrapper;

	beforeEach(() => {
		store = makeStore;
		store.dispatch(initCart());
    store.dispatch(deleteCart());
    store.dispatch(addItem(mockProduct.id));
    store.dispatch(addItem(mockProduct.id));
    const state = store.getState().ShoppingCart;

		wrapper = mount(
			<Provider store={store}>
	      <ProductModifier
					product={mockProduct}
					amount={state[mockProduct.id]}
					removeItemButton={true}
				/>
			</Provider>
    );
  });

	test('ProductModifier renders', () => {
		expect(wrapper.find(ProductModifier).exists())
	    .toEqual(true);
	});

	test('ProductModifier renders product data', () => {
    const amount = wrapper.find(ProductModifier).prop('amount');

    expect(wrapper.find(ProductModifier).find('.product-total').text())
      .toEqual(formatPrice(mockProduct.price * amount));

		expect(wrapper.find(ProductModifier).find('input').prop('value'))
      .toEqual(2);
	});

	test('Product amount can be inceremented', () => {
    const increment = wrapper.find(ProductModifier).find('.increment')
		increment.simulate('click');

		expect(store.getState().ShoppingCart[mockProduct.id])
      .toEqual(3);
  });

	test('Product amount can be decremented', () => {
    const decrement = wrapper.find(ProductModifier).find('.decrement')
		decrement.simulate('click');

		expect(store.getState().ShoppingCart[mockProduct.id])
      .toEqual(1);
  });

	test('Product can be removed', () => {
    const remove = wrapper.find(ProductModifier).find('.remove')
    remove.simulate('click');

		expect(store.getState().ShoppingCart)
      .toEqual({});
  });

  test('Conditional remove is rendered when amount is 1', () => {
		const wrapper = mount(
			<Provider store={store}>
	      <ProductModifier
					product={mockProduct}
					amount={1}
					removeItemButton={true}
				/>
			</Provider>
    );

    expect(wrapper.find(ProductModifier).find('.decrement').exists())
      .toEqual(false)

    expect(wrapper.find(ProductModifier).find('.remove').exists())
      .toEqual(true)
  });
});