"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Shop = require('./components/shop');

var catalogNameArr = [{
	name: 'Название',
	code: 1
}, {
	name: 'Цена',
	code: 2
}, {
	name: 'Количесвто',
	code: 3
}, {
	name: 'Фото',
	code: 4
}, {
	name: 'Контроль',
	code: 5
},];
var catalogItemsArr = [{
	text: 'апельсины',
	code: 1,
	count: 30,
	price: 100,
	foto: 'image/orange.jpg'
}, {
	text: 'бананы',
	code: 2,
	count: 40,
	price: 110,
	foto: 'image/banans.jpg'
}, {
	text: 'яблоки',
	code: 3,
	count: 50,
	price: 70,
	foto: 'image/apple.jpg'
}, {
	text: 'груши',
	code: 4,
	count: 45,
	price: 80,
	foto: 'image/grushi1.jpg'
},];

ReactDOM.render(
	React.createElement(Shop, {
		names: catalogNameArr,
		items: catalogItemsArr,
	}),
	document.getElementById('container')
);