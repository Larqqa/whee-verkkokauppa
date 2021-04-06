import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Header from './Header';
import ShoppingCartPopUp from '../components/shopping-cart-popup/ShoppingCartPopUp';


Enzyme.configure({ adapter: new Adapter() });

describe('The Header', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Header />);
  });

	test('Header renders', () => {
		expect(wrapper.exists())
	    .toEqual(true);
	});

	test('Header renders the logo', () => {
    expect(wrapper.find('.logo').text())
      .toEqual('whee');
    });

  test('Header renders the slogan', () => {
    expect(wrapper.find('.slogan').text())
      .toEqual('The most definitive shape store in the world');
  });

  test('Header renders the Shopping cart pop up button', () => {
    expect(wrapper.find(ShoppingCartPopUp).exists())
      .toEqual(true);
  });
});