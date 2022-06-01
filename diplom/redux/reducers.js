import { combineReducers } from 'redux';

import booksReducer from "./booksReducer";

let combinedReducer = combineReducers({
	books: booksReducer, // редьюсер countriesReducer отвечает за раздел state под именем countries
	// + другие редьюсеры
});

export default combinedReducer;
