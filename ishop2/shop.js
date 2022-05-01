var Shop = React.createClass({

    displayName: 'Shop',
    /*
    	propTypes: {
    		names: React.PropTypes.array.isRequired,
    		catalog: React.PropTypes.array.isRequired,
    	},
    */
    getInitialState: function() {
        return {
            selectedLineCode: null,
            startPack: this.props.items,
        };
    },
    selected: function(key) {
        this.setState({ selectedLineCode: key });
    },
    del: function(code) {
        var copyStartPack = this.state.startPack.slice();
        copyStartPack.splice(code, 1);
        this.setState({ startPack: copyStartPack });
    },



    render: function() {
        var catalogNamesCodes = [];
        this.props.names.forEach(v => catalogNamesCodes.push(React.DOM.th({ key: v.code, className: 'itemName', }, v.name)));
        return React.DOM.table({ className: 'tableShop' },
            React.DOM.thead({ className: 'names' }, React.DOM.tr({ className: 'CatalogNames' }, catalogNamesCodes)),
            React.createElement(ProductLine, { pack: this.state.startPack, cbSelected: this.selected, startCode: this.state.selectedLineCode, cbdel: this.del }),
        );
    },
});