import { combineReducers } from 'redux';

import booksReducer from "./booksReducer";
import cardReducer from "./cardReducer";

let combinedReducer = combineReducers({
	books: booksReducer,
	basket: cardReducer,
	// редьюсер countriesReducer отвечает за раздел state под именем books
	// + другие редьюсеры
});

export default combinedReducer;
