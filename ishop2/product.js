var ProductLine = React.createClass({

    displayName: 'ProductLine',
    /*
    	propTypes: {
    		names: React.PropTypes.array.isRequired,
    		catalog: React.PropTypes.array.isRequired,
    	},
    */

    selectLine: function() {
        this.props.cbSelected(this.props.code);

    },


    render: function() {
        var catalogItemsCodes = [];
        this.props.pack.forEach(l => catalogItemsCodes.push(React.DOM.tr({ key: l.code, className: 'info', onClick: () => this.selectLine(l.code), 'data-code': l.code, },
            React.DOM.td({ className: 'Text' }, l.text, ),
            React.DOM.td({ className: 'Count' }, l.count, ),
            React.DOM.td({ className: 'Text' }, l.price, ),
            React.DOM.td({ className: 'Foto' }, React.DOM.img({ className: 'FotoItem', src: l.foto })),
            React.DOM.td({ className: 'button' }, React.DOM.input({ className: 'reset', type: "button", value: "Удалить", })),
        )));
        return React.DOM.tbody({ className: 'items' }, catalogItemsCodes);
    },
});