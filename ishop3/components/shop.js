import React from 'react';
import PropTypes from 'prop-types';
import './ishop.css';

import ProductLine from './product';


class Shop extends React.Component {
	static propTypes = {
		names: PropTypes.array.isRequired,
		items: PropTypes.array.isRequired,
	};



	state = {
		selectedLineCode: null,
		startPack: this.props.items,
	}
	selected = (key) => {
		this.setState({ selectedLineCode: key });
	}
	del = (code) => {
		this.setState({
			startPack: this.state.startPack.filter(m => m.code !== code)
		});
		/*
			var copyStartPack = this.state.startPack.slice();
			copyStartPack.splice(code, 1);
			this.setState({ startPack: copyStartPack });
	*/
	}
	render() {
		var catalogNamesCodes = [];
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
						price={n.price} foto={n.foto} cbSelected={this.selected} startCode={this.state.selectedLineCode} cbdel={this.del} />
					)
					)}
				</table>
				<input className={'newProduct'} type={'button'} value={'Новый'} ></input>
			</div>
		)
	}
};

export default Shop;





/*
render() {
	var catalogNamesCodes = [];
	this.props.names.forEach(v => catalogNamesCodes.push(React.DOM.th({ key: v.code, className: 'itemName', }, v.name)));
	return React.DOM.table({ className: 'tableShop' },
		React.DOM.thead({ className: 'names' }, React.DOM.tr({ className: 'CatalogNames' }, catalogNamesCodes)),
		this.state.startPack.map(n => {
			return React.createElement(ProductLine, {
				key: n.code,
				code: n.code, text: n.text, count: n.count,
				price: n.price, foto: n.foto, cbSelected: this.selected, startCode: this.state.selectedLineCode, cbdel: this.del,
			})
		})
	);
}*/