import { ADD_TO_CART, REMOVE_FROM_CART } from './cardAC';
const initState = {
	items: []
}


function cardReducer(state = initState, action) {
	switch (action.type) {

		case ADD_TO_CART: {
			return {
				...state,
				items: [...state.items, action.cardBook]
			};
		}

		case REMOVE_FROM_CART: {
			return {
				...state,
				items: state.items.filter(o => o.id !== action.booksId)
			};
		}

		default:
			return state;
	}
}

export default cardReducer;

