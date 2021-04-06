import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ShoppingCart from './ShoppingCart';
import ShoppingCartComponent from '../containers/ShoppingCart';
import makeStore from '../redux/store';
import { deleteCart, initCart } from '../redux/shoppingCartReducer';

Enzyme.configure({ adapter: new Adapter() });

describe('The Shopping Cart', () => {
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


	it ('Shopping cart renders', () => {
    expect(wrapper.find(ShoppingCart).exists())
	    .toEqual(true);
  });

  it ('Shopping cart renders Shopping cart component', () => {
    expect(wrapper.find(ShoppingCart).find(ShoppingCartComponent).exists())
	    .toEqual(true);
  });
});