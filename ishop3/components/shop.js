import React from 'react';
import PropTypes from 'prop-types';
import './ishop.css';

import ProductLine from './product';
import ItemCard from './itemCard';


class Shop extends React.Component {
	static propTypes = {
		names: PropTypes.array.isRequired,
		items: PropTypes.array.isRequired,
	};

	state = {
		selectedLineCode: null,
		startPack: this.props.items,
		selectedItem: this.props.items,
		selectedLineCode: null,
		workMode: 1,
		dis: false,

	}
	selected = (key) => {
		this.setState({ selectedLineCode: key });
	}
	mode = () => {
		this.setState({ workMode: "card" });
	}
	modeNewProduct = () => {
		this.setState({ workMode: "addproduct" });
		this.setState({ selectedLineCode: null });
		//	this.setState({ dis: true });
	}

	modeStart = () => {
		this.setState({ workMode: 1 });
	}
	diseableButton = () => {
		this.setState({ dis: true });
	}
	diseableStartButton = () => {
		this.setState({ dis: false });
	}
	del = (code) => {
		this.setState({
			startPack: this.state.startPack.filter(m => m.code !== code)
		});

	}
	changeItem = (newItem) => {
		const newItems = this.state.startPack.map(item => item.code === newItem.code ? newItem : item)
		this.setState({
			startPack: newItems
		});
	}

	addItem = (newItem) => {
		const newPack = [...this.state.startPack];
		newPack.push(newItem);
		this.setState({
			startPack: newPack
		});

	}





	render() {
		var catalogNamesCodes = [];

		var selectedItem = this.state.startPack.filter(item => item.code === this.state.selectedLineCode)[0]
		this.props.names.forEach(v => catalogNamesCodes.push(<th key={v.code} className={'itemName'}>{v.name}</th>));
		return (
			<div>
				<table className={'tableShop'}>
					<thead className={'names'}>
						<tr className={'CatalogNames'}>
							{catalogNamesCodes}
						</tr>
					</thead>
					{this.state.startPack.map(n =>
					(<ProductLine
						key={n.code}
						code={n.code} text={n.text} count={n.count}
						price={n.price} foto={n.foto} cbSelected={this.selected} startCode={this.state.selectedLineCode} cbdiseableStart={this.diseableStartButton} cbdiseable={this.diseableButton} cbselectModeStart={this.modeStart} cbdel={this.del} cbselectMode={this.mode}
						disableMod={this.state.dis} workMode={this.state.workMode} />
					)
					)}
				</table>
				<input className={'newProduct'} type={'button'} value={'Новый'} disabled={this.state.dis} onClick={this.modeNewProduct}  ></input>
				{
					(this.state.selectedLineCode || this.state.workMode)
					&&
					(<ItemCard
						data={selectedItem} startCardMode={this.state.workMode} cbdiseable={this.diseableButton} cbdiseableStart={this.diseableStartButton}
						cbSaveItem={this.changeItem} cbAddItem={this.addItem} key={this.state.selectedLineCode} cbselectModeStart={this.modeStart} idItems={this.state.id}
					/>
					)
				}
			</div>
		)
	}
};

export default Shop;





