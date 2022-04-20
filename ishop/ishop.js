var ItemShop = React.createClass({

	displayName: 'ItemShop',
	/*
		getDefaultProps: function() {
			return { question: "Вопрос ни о чём" }
		},
	*/
	render: function () {

		var catalogNamesCodes = [];

		this.props.names.forEach(v => catalogNamesCodes.push(React.DOM.th({ key: v.code, className: 'itemName' }, v.name)));


		/*
				var catalogNamesCodes = [];
				for (var a = 0; a < this.props.names.length; a++) {
					var itemName = this.props.names[a];
					var catalogNamesCode =
						React.DOM.tr({ key: itemName.code, className: 'CatalogNames' },
							React.DOM.th({ className: 'NameItem' }, itemName),
							React.DOM.th({ className: 'NameItem' }, itemName),
							React.DOM.th({ className: 'NameItem' }, itemName),
							React.DOM.th({ className: 'NameItem' }, itemName),
						);
					catalogNamesCodes.push(catalogNamesCode);
				}*/

		var catalogItemsCodes = [];

		this.props.catalog.forEach(l => catalogItemsCodes.push(React.DOM.tr({ key: l.code, className: 'info' },
			React.DOM.td({ className: 'Text' }, l.text),
			React.DOM.td({ className: 'Count' }, l.count),
			React.DOM.td({ className: 'Text' }, l.price),
			React.DOM.td({ className: 'Foto' }, React.DOM.img({ className: 'FotoItem', src: l.foto })),
		)));
		/*
				for (var i = 0; i < this.props.catalog.length; i++) {
					var catalogItem = this.props.catalog[i];
					var catalogItemCode =
						React.DOM.tr({ key: catalogItem.code, className: 'info' },
							React.DOM.td({ className: 'Text' }, catalogItem.text),
							React.DOM.td({ className: 'Count' }, catalogItem.count),
							React.DOM.td({ className: 'Text' }, catalogItem.price),
							React.DOM.td({ className: 'Foto' }, React.DOM.img({ className: 'FotoItem', src: catalogItem.foto },)),
						);
					catalogItemsCodes.push(catalogItemCode);
				}
		*/
		return React.DOM.table({ className: 'tableShop' },
			React.DOM.thead({ className: 'names' }, React.DOM.tr({ className: 'CatalogNames' }, catalogNamesCodes)),
			React.DOM.tbody({ className: 'items' }, catalogItemsCodes),
		);
	},

});