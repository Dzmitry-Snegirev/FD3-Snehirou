import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { BrowserRouter } from 'react-router-dom';

import combinedReducer from '../redux/reducers.js';
import BooksList from '../core/BooksList.js';
// import PagesRouter from '../core/components/PagesRouter';
let store = createStore(combinedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

class MainPage extends React.PureComponent {

	render() {

		return (
			<Provider store={store}>
				<div>
					<BooksList />
				</div>
			</Provider>
		);

	}

}

export default MainPage;