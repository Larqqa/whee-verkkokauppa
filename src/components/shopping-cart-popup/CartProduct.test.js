import React from 'react';
import { Provider } from 'react-redux'
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CartProduct from './CartProduct';
import { formatPrice } from '../../services/shopInfo';
import makeStore from '../../redux/store';
import { deleteCart, initCart } from '../../redux/shoppingCartReducer';

Enzyme.configure({ adapter: new Adapter() });

const mockProduct = {
  "id": "30954d90085f6eaaf5817917fc5fecb3",
  "image": "/images/circle.png",
  "alt": "Circle product",
  "name": "Circle",
	"description": "Perfect choice when\nyou don't need any corners.",
  "price": 999
};

describe('The cart product', () => {
	let store;
  let wrapper;

	beforeEach(() => {
		store = makeStore;
		store.dispatch(initCart());
		store.dispatch(deleteCart());

    wrapper = mount(
			<Provider store={store}>
        <CartProduct product={mockProduct} amount={2} />
			</Provider>
    );
  });

	test('Product renders', () => {
		expect(wrapper.find(CartProduct).exists())
	    .toEqual(true);
	});

	test('Product renders data', () => {
    expect(wrapper.find(CartProduct).find('.product-name').text())
      .toEqual(mockProduct.name);

    expect(wrapper.find(CartProduct).find('.product-price').text())
      .toEqual(formatPrice(mockProduct.price));

    expect(wrapper.find(CartProduct).find('.product-image').find('img').exists())
      .toEqual(true)

    expect(wrapper.find(CartProduct).find('.product-image').find('img').prop('src'))
      .toEqual(mockProduct.image);

    expect(wrapper.find(CartProduct).find('.product-image').find('img').prop('alt'))
      .toEqual(mockProduct.alt);
  });
});