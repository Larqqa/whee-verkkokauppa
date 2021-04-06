import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Product from './Product';
import { formatPrice } from '../services/shopInfo';

Enzyme.configure({ adapter: new Adapter() });

const mockProduct = {
  "id": "30954d90085f6eaaf5817917fc5fecb3",
  "image": "/images/circle.png",
  "alt": "Circle product",
  "name": "Circle",
	"description": "Perfect choice when\nyou don't need any corners.",
  "price": 999
};

describe('The Product', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
      <Product product={mockProduct}/>
    );
  });

	test('Product renders', () => {
		expect(wrapper.find(Product).exists())
	    .toEqual(true);
	});

	test('Product renders data', () => {
    expect(wrapper.find(Product).find('.name').text())
      .toEqual(mockProduct.name);

    expect(wrapper.find(Product).find('.description').text())
      .toEqual(mockProduct.description);

    expect(wrapper.find(Product).find('.price').text())
      .toEqual(formatPrice(mockProduct.price));

    expect(wrapper.find(Product).find('.image').find('img').exists())
      .toEqual(true)

    expect(wrapper.find(Product).find('.image').find('img').prop('src'))
      .toEqual(mockProduct.image);

    expect(wrapper.find(Product).find('.image').find('img').prop('alt'))
      .toEqual(mockProduct.alt);
  });
});