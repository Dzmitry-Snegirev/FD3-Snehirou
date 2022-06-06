import { BOOKS_LOADING, BOOKS_ERROR, BOOKS_SET, SET_FILTER } from './booksAC';

const initState = {

	status: 0, // 0 - ничего не началось, 1 - идёт загрузка, 2 - была ошибка, 3 - данные загружены
	data: null,
	filterBy: "all",

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
			let newState = { ...state };

			if (action.name == "price_high") {
				newState.data.sort((a, b) =>
					a.price > b.price ? -1 : 1);
				return newState;
			}
			else if (action.name == "price_low") {
				newState.data.sort((a, b) =>
					a.price < b.price ? -1 : 1);
				return newState;
			}
			else if (action.name == "author") {
				newState.data.sort((a, b) =>
					a.author < b.author ? 1 : -1);
				return newState;
			}
			else if (action.name == "all") {

				return state.data;
			}
		};
		default:
			return state;
	}
}

export default booksReducer;
