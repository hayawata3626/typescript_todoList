import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import App from './components/App';
import todos from './reducers/index';
import persistState from 'redux-localstorage';

const enhancer = compose(
  persistState()
)

let store = createStore(todos, enhancer);

ReactDOM.render(
	<Provider store={store}>
  	<App />
	</Provider>,
  document.getElementById('root') as HTMLElement
);
