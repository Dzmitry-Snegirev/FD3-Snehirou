
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';



const addToCart = function (books) {
	return {
		type: ADD_TO_CART,
		cardBook: books,
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
