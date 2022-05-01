var Shop = React.createClass({

	displayName: 'Shop',
	/*
		propTypes: {
			names: React.PropTypes.array.isRequired,
			catalog: React.PropTypes.array.isRequired,
		},
	*/
	getInitialState: function () {
		return {
			selectedLineCode: null,
		};
	},
	selected: function (key) {
		this.setState({ selectedLineCode: key });
	},

	render: function () {
		var catalogNamesCodes = [];
		this.props.names.forEach(v => catalogNamesCodes.push(React.DOM.th({ key: v.code, className: 'itemName', }, v.name)));
		return React.DOM.table({ className: 'tableShop' },
			React.DOM.thead({ className: 'names' }, React.DOM.tr({ className: 'CatalogNames' }, catalogNamesCodes)),
			React.createElement(ProductLine, { pack: this.props.items, cbSelected: this.selected, startCode: this.state.selectedLineCode }),
		);
	},

});