var ProductLine = React.createClass({

	displayName: 'ProductLine',

	propTypes: {
		text: React.PropTypes.string.isRequired,
		count: React.PropTypes.number.isRequired,
		price: React.PropTypes.number.isRequired,
		code: React.PropTypes.number.isRequired,


	},


	selectLine: function (eo) {
		this.props.cbSelected(this.props.code);
	},
	delLine: function (eo) {
		const conf = confirm(`Вы уверены?`);
		eo.stopPropagation();
		conf ? this.props.cbdel(this.props.code) : this.selectLine
	},




	render: function () {
		return React.DOM.tbody({ className: 'items' },
			React.DOM.tr({
				className: 'info', onClick: this.selectLine,
				style: { backgroundColor: (this.props.startCode === this.props.code) ? 'orange' : 'white' }
			},
				React.DOM.td({ className: 'Text' }, this.props.text,),
				React.DOM.td({ className: 'Count' }, this.props.count,),
				React.DOM.td({ className: 'Text' }, this.props.price,),
				React.DOM.td({ className: 'Foto' }, React.DOM.img({ className: 'FotoItem', src: this.props.foto })),
				React.DOM.td({ className: 'button' }, React.DOM.input({ className: 'reset', type: "button", value: "Удалить", onClick: this.delLine })),
			))
	},
});



