import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combinedReducer from '../redux/reducers.js';
import BooksList from '../core/BooksList.js';

let store = createStore(combinedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

class MainPage extends React.PureComponent {

	render() {

		return (
			<Provider store={store}>
				<div>
					<h1>Страны</h1>
					<BooksList />
				</div>
			</Provider>
		);

	}

}

export default MainPage;
