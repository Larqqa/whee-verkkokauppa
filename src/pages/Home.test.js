import React from 'react';
import { Provider } from 'react-redux'
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from './Home';
import Shop from '../containers/Shop';
import makeStore from '../redux/store';
import { deleteCart, initCart } from '../redux/shoppingCartReducer';

Enzyme.configure({ adapter: new Adapter() });

describe('The Home', () => {
	let store;
  let wrapper;

	beforeEach(() => {
		store = makeStore;
		store.dispatch(initCart());
		store.dispatch(deleteCart());

    wrapper = mount(
			<Provider store={store}>
        <Home />
			</Provider>
    );
  });


	it ('Home renders', () => {
    expect(wrapper.find(Home).exists())
	    .toEqual(true);
  });

  it ('Home renders Shop', () => {
    expect(wrapper.find(Home).find(Shop).exists())
	    .toEqual(true);
  });
});