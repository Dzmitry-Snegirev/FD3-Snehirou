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
		workMode: false,
		diseable: false,
	}
	selected = (key) => {
		this.setState({ selectedLineCode: key });
	}
	mode = () => {
		this.setState({ workMode: true });
	}
	diseableButton = () => {
		this.setState({ diseable: true });
	}
	del = (code) => {
		this.setState({
			startPack: this.state.startPack.filter(m => m.code !== code)
		});

	}
	render() {
		var catalogNamesCodes = [];
		var selectedItem = this.props.items.filter(item => item.code === this.state.selectedLineCode)[0]
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
						price={n.price} foto={n.foto} cbSelected={this.selected} startCode={this.state.selectedLineCode} cbdel={this.del} cbselectMode={this.mode} />
					)
					)}
				</table>
				<input className={'newProduct'} type={'button'} value={'Новый'} ></input>
				{
					this.state.selectedLineCode
					&&
					(<ItemCard
						data={selectedItem} startCardMode={this.state.workMode} cbdiseable={this.diseableButton}
					/>
					)
				}
			</div>
		)
	}
};

export default Shop;





