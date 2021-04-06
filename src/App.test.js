import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
import Home from './pages/Home';
import makeStore from './redux/store';
import { deleteCart, initCart } from './redux/shoppingCartReducer';

Enzyme.configure({ adapter: new Adapter() });

describe('The App', () => {
	let store;
  let wrapper;

	beforeEach(() => {
		store = makeStore;
		store.dispatch(initCart());
		store.dispatch(deleteCart());

    wrapper = mount(
			<Provider store={store}>
        <BrowserRouter>
		      <App />
        </BrowserRouter>
			</Provider>
    );
  });

	it ('App renders', () => {
    expect(wrapper.find(App).exists())
	    .toEqual(true);
  });

	it ('Home renders by default', () => {
    expect(wrapper.find(App).find(Home).exists())
	    .toEqual(true);
  });
});