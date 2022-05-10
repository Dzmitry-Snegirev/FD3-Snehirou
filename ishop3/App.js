"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/shop';

var catalogNameArr = require('./catalogNameArr.json');
var catalogItemsArr = require('./catalogItemsArr.json');

ReactDOM.render(
	<Shop
		names={catalogNameArr}
		items={catalogItemsArr}
	/>
	, document.getElementById('container')
);