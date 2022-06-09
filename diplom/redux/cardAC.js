
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';



const addToCart = function (obj) {
	return {
		type: ADD_TO_CART,
		cardBook: obj,
	};
}

const removeFromCart = function (id) {
	return {
		type: REMOVE_FROM_CART,
		booksId: id,
	};
}

export {
	addToCart, ADD_TO_CART,
	removeFromCart, REMOVE_FROM_CART,
}
