﻿import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import { voteEvents } from './events';
import './MobileCompany.css';
import ItemCard from './itemCard';

class MobileCompany extends React.PureComponent {

	static propTypes = {
		name: PropTypes.string.isRequired,//список клиентов
		clients: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				fio: PropTypes.string.isRequired,
				balance: PropTypes.any.isRequired,
			})
		),
		calogNames: PropTypes.arrayOf(//данные для шапки таблицы
			PropTypes.shape({
				code: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
			})
		),
	};

	state = {
		name: this.props.name,
		clients: this.props.clients,
		headerNames: this.props.calogNames,
		selectedLineCode: null,
		workMode: 1,//режим выбора редактирования или добавления  товара
		filterMode: 1,//режим выбора редактирования или добавления  товара
	};



	componentDidMount = () => {
		voteEvents.addListener('EditDataItem', this.editData);
		voteEvents.addListener('Edititem', this.selected);
		voteEvents.addListener('Cancel', this.cancel);
		voteEvents.addListener('del', this.delItem);
		voteEvents.addListener('AddItem', this.addNewItem);
	};

	componentWillUnmount = () => {
		voteEvents.removeListener('Edititem', this.selected);
		voteEvents.removeListener('EditDataItem', this.editData);
		voteEvents.removeListener('del', this.delItem);
		voteEvents.removeListener('AddItem', this.addNewItem);
		voteEvents.removeListener('Cancel', this.cancel);
	};

	editData = (item) => {
		let newClients = [...this.state.clients]; // копия самого массива клиентов
		newClients.forEach((c, i) => {
			if (c.id == item.id) {
				let newClient = { ...c }; // копия хэша изменившегося клиента
				newClient = item;
				newClients[i] = newClient;
			}
		});
		this.setState({ clients: newClients });
		this.setState({ workMode: 1 });
	}

	addNewItem = (item) => {
		let newClients = [...this.state.clients, item]; // копия самого массива клиентов
		this.setState({ clients: newClients });
		this.setState({ workMode: 1 });
	}

	selected = (key) => {
		this.setState({ workMode: "editProduct" });
		this.setState({ selectedLineCode: key });
	}

	cancel = () => {
		this.setState({ workMode: 1 });
	}

	delItem = (code) => {
		let arr = this.state.clients.slice();
		// копия самого массива клиентов
		arr.forEach((c, i) => {
			if (c.id == code) {
				arr.splice(i, 1)
			}
		});
		this.setState({ clients: arr });
	}

	modeNewProduct = () => {
		this.setState({ workMode: "addproduct" });
		this.setState({ selectedLineCode: null });
	}

	setName1 = () => {
		this.setState({ name: 'МТС' });
	};

	setName2 = () => {
		this.setState({ name: 'Velcom' });
	};

	active = () => {
		this.setState({ filterMode: 3 });//режим:активные клиенты
	};

	block = () => {
		this.setState({ filterMode: 2 });//режим: заблокированые клиенты
	};

	allClients = () => {
		this.setState({ filterMode: 1 });//режим: все клиенты
	};

	sort = () => {
		let hash1, hash2, hash3;
		if (this.state.filterMode === 1) {
			hash1 = this.state.clients.slice();
			return hash1
		}
		if (this.state.filterMode === 2) {
			hash2 = this.state.clients.slice();
			for (let i in hash2) {
				if (hash2[i].statusActivity == true) {
					delete hash2[i];
				}
			}
			return hash2
		}
		if (this.state.filterMode === 3) {
			hash3 = this.state.clients.slice();
			for (let i in hash3) {
				if (hash3[i].statusActivity == false) {
					delete hash3[i];
				}
			}
			return hash3
		}
	}

	render() {

		console.log("MobileCompany render");
		var catalogNamesCodes = [];
		var selectedItem = this.state.clients.filter(item => item.id === this.state.selectedLineCode)[0]

		this.props.calogNames.forEach(v => catalogNamesCodes.push(<th key={v.code} className={'itemName'}>{v.name}</th>));

		var clientsCode = this.sort().map(client =>
			<MobileClient key={client.id} info={client} modeClients={this.state.filterMode} />
		);

		return (

			<div className='MobileCompany'>
				<input type="button" value="МТС" onClick={this.setName1} />
				<input type="button" value="Velcom" onClick={this.setName2} />
				<div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
				<br></br>
				<br></br>
				<br></br>
				<input type="button" value="Все" onClick={this.allClients} />
				<input type="button" value="Активные" onClick={this.active} />
				<input type="button" value="Заблокированные" onClick={this.block} />
				<br></br>
				<br></br>
				<br></br>
				<table className={'tableShop'}>
					<thead className={'names'}>
						<tr className={'CatalogNames'}>
							{catalogNamesCodes}
						</tr>
					</thead>
					<tbody className='MobileCompanyClients'>
						{clientsCode}
					</tbody>
				</table>
				<input className={'newProduct'} type={'button'} value={'Добавить клиента'} disabled={this.state.dis} onClick={this.modeNewProduct}  ></input>
				{
					(this.state.selectedLineCode || this.state.workMode)
					&&
					(<ItemCard
						data={selectedItem}
						startClients={this.state.clients}
						startCardMode={this.state.workMode}
						key={this.state.selectedLineCode}
					/>
					)
				}

			</div>
		)
			;

	}

}

export default MobileCompany;
