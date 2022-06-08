import { BOOKS_LOADING, BOOKS_ERROR, BOOKS_SET, SET_FILTER, SET_QERY } from './booksAC';

const initState = {

	status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
	data: null,
	filterBy: "all",
	searchqury: "",
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
				data: action.booksStart,
			};
			return newState;
		}
		case SET_FILTER: {
			return {
				...state,
				filterBy: action.name
			}

		};
		case SET_QERY: {
			return {
				...state,
				searchqury: action.value
			}
		}
		default:
			return state;
	}
}

export default booksReducer;


// let newState = { ...state };
// newState.data.filter(book => {
// 	console.log(action.value)
// 	return book.title.includes(action.value)
// })