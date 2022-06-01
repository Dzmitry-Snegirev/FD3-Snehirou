import { BOOKS_LOADING, BOOKS_ERROR, BOOKS_SET } from './booksAC';

const initState = {

	status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
	data: null,

}

function booksReducer(state = initState, action) {
	switch (action.type) {

		case BOOKS_LOADING: {
			let newState = {
				status: 1,
				data: null,
			};
			return newState;
		}

		case BOOKS_ERROR: {
			let newState = {
				status: 2,
				data: null,
			};
			return newState;
		}

		case BOOKS_SET: {
			let newState = {
				status: 3,
				data: action.books,
			};
			return newState;
		}

		default:
			return state;
	}
}

export default booksReducer;
