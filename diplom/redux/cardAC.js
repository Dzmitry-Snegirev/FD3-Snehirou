const initialState = {
	items: [{
		"id": 0,
		"title": "Происхождение",
		"author": "Дэн Браун",
		"image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
		"price": 710,
		"rating": 3
	},
	{
		"id": 0,
		"title": "Происхождение",
		"author": "Дэн Браун",
		"image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
		"price": 710,
		"rating": 3
	},
	{
		"id": 0,
		"title": "Происхождение",
		"author": "Дэн Браун",
		"image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
		"price": 710,
		"rating": 3
	}]
};

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
