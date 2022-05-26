import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import { voteEvents } from './events';
import './MobileCompany.css';
import ItemCard from './itemCard';

class MobileCompany extends React.PureComponent {

	// static propTypes = {
	// 	name: PropTypes.string.isRequired,
	// 	clients: PropTypes.arrayOf(
	// 		PropTypes.shape({
	// 			id: PropTypes.number.isRequired,
	// 			fio: PropTypes.string.isRequired,
	// 			balance: PropTypes.number.isRequired,
	// 		})
	// 	),
	// };

	state = {
		name: this.props.name,
		clients: this.props.clients,
		headerNames: this.props.calogNames,
		selectedLineCode: null,
		workMode: 1,
	};



	componentDidMount = () => {
		voteEvents.addListener('EditDataItem', this.editData);
		voteEvents.addListener('Edititem', this.selected);
	};

	componentWillUnmount = () => {
		voteEvents.removeListener('Edititem', this.selected);
		voteEvents.removeListener('EditDataItem', this.editData);
	};

	editData = (key, item) => {

		let newClients = [...this.state.clients]; // копия самого массива клиентов
		newClients.forEach((c, i) => {
			if (c.id == key) {
				let newClient = { ...c }; // копия хэша изменившегося клиента
				newClient = item;
				newClients[i] = newClient;
			}
		});
		this.setState({ clients: newClients });
	}

	selected = (key) => {
		this.setState({ workMode: "editProduct" });
		this.setState({ selectedLineCode: key });
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

	render() {

		console.log("MobileCompany render");
		var catalogNamesCodes = [];

		var selectedItem = this.props.clients.filter(item => item.id === this.state.selectedLineCode)[0]
		this.props.calogNames.forEach(v => catalogNamesCodes.push(<th key={v.code} className={'itemName'}>{v.name}</th>));
		var clientsCode = this.state.clients.map(client =>
			<MobileClient key={client.id} info={client} status={client.statusActivity} />
		);

		return (

			<div className='MobileCompany'>
				<input type="button" value="МТС" onClick={this.setName1} />
				<input type="button" value="Velcom" onClick={this.setName2} />
				<div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
				<br></br>
				<br></br>
				<br></br>
				<input type="button" value="Все" onClick={this.setName1} />
				<input type="button" value="Активные" onClick={this.setName2} />
				<input type="button" value="Заблокированные" onClick={this.setName2} />
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
						startCardMode={this.state.workMode}
						code={this.state.selectedLineCode}
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
