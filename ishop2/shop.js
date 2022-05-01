var Shop = React.createClass({

	displayName: 'Shop',

	propTypes: {
		names: React.PropTypes.array.isRequired,
		items: React.PropTypes.array.isRequired,
	},

	getInitialState: function () {
		return {
			selectedLineCode: null,
			startPack: this.props.items,
		};
	},
	selected: function (key) {
		this.setState({ selectedLineCode: key });
	},
	del: function (code) {
		this.setState({
			startPack: this.state.startPack.filter(m => m.code !== code)
		});
		/*
			var copyStartPack = this.state.startPack.slice();
			copyStartPack.splice(code, 1);
			this.setState({ startPack: copyStartPack });
	*/
	},

	render: function () {
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
	},
});