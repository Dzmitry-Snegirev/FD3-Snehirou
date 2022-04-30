var ProductsLine = React.createClass({

	displayName: 'ProductsLine',
	/*
		propTypes: {
			names: React.PropTypes.array.isRequired,
			catalog: React.PropTypes.array.isRequired,
		},
	*/

	select: function () {
		this.props.cbSelected(this.props.key);
	},


	render: function () {
		var catalogItemsCodes = [];
		this.props.catalog.forEach(l => catalogItemsCodes.push(React.DOM.tr({ key: l.code, className: 'info', onClick: this.select },
			React.DOM.td({ className: 'Text' }, l.text,),
			React.DOM.td({ className: 'Count' }, l.count,),
			React.DOM.td({ className: 'Text' }, l.price,),
			React.DOM.td({ className: 'Foto' }, React.DOM.img({ className: 'FotoItem', src: l.foto })),
			React.DOM.td({ className: 'button' }, React.DOM.input({ className: 'reset', type: "button", value: "Удалить", })),
		)));
		return React.DOM.tbody({ className: 'items' }, catalogItemsCodes);
	},
});

