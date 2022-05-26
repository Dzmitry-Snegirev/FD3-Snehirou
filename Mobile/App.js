"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

var catalogNameArr = require('./catalogNameArr.json');

let companyName = 'Velcom';
let clientsArr = [
	{ id: 101, fio: "Иванов ", name: "Иван", surname: "Иванович", balance: 200, statusActivity: true },
	{ id: 105, fio: "Сидоров ", name: "Сидор", surname: "Сидорович", balance: 250, statusActivity: true },
	{ id: 110, fio: "Петров ", name: "Петр", surname: "Петрович", balance: 180, statusActivity: true },
	{ id: 120, fio: "Григорьев ", name: "Григорий", surname: "Григорьевич", balance: 220, statusActivity: false },
];

ReactDOM.render(
	<MobileCompany
		name={companyName}
		calogNames={catalogNameArr}
		clients={clientsArr}
	/>
	, document.getElementById('container')
);

