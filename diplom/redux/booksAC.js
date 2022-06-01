const BOOKS_LOADING = 'BOOKS_LOADING';
const BOOKS_ERROR = 'BOOKS_ERROR';
const BOOKS_SET = 'BOOKS_SET';

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
		books: books,
	};
}

export {
	booksLoadingAC, BOOKS_LOADING,
	booksErrorAC, BOOKS_ERROR,
	booksSetAC, BOOKS_SET,
}
