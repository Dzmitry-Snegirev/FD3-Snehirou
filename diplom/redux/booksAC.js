const BOOKS_LOADING = 'BOOKS_LOADING';
const BOOKS_ERROR = 'BOOKS_ERROR';
const BOOKS_SET = 'BOOKS_SET';
const SET_FILTER = 'SET_FILTER';
const SET_QERY = 'SET_QERY';

const booksLoadingAC = function () {
	return {
		type: BOOKS_LOADING,
	};
}

const booksErrorAC = function () {
	return {
		type: BOOKS_ERROR,
	};
}

const booksSetAC = function (books) {
	return {
		type: BOOKS_SET,
		booksStart: books,
	};
}
const setFilterAC = function (books, name) {
	return {
		type: SET_FILTER,
		name: name,
		booksStart: books,
	};
}
const setQeryAC = function (value) {
	return {
		type: SET_QERY,
		value: value,
	};
}

export {
	booksLoadingAC, BOOKS_LOADING,
	booksErrorAC, BOOKS_ERROR,
	booksSetAC, BOOKS_SET,
	setFilterAC, SET_FILTER,
	setQeryAC, SET_QERY,
}
