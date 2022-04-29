var Filter = React.createClass({

	displayName: 'Filter',

	propTypes: {
		startText: React.PropTypes.string.isRequired,
		words: React.PropTypes.array.isRequired,
	},


	getInitialState: function () {
		return {
			searchStr: this.props.startText,
			sortItems: false,
		};
	},

	filterChar: function (EO) {
		this.setState({ searchStr: EO.target.value });
	},
	sortStr: function (EO) {
		this.setState({ sortItems: EO.target.checked });
	},

	reset: function () {
		this.setState({ searchStr: this.props.startText, sortItems: false });
	},

	mySort: function (a, b) {
		var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
		if (nameA < nameB) //сортируем строки по возрастанию
			return -1
		if (nameA > nameB)
			return 1
		return 0 // Никакой сортировки
	},

	render: function () {
		var wordsCode = this.props.words.slice(0);

		if (this.state.searchStr !== "")
			wordsCode = wordsCode.filter(m => m.name.indexOf(this.state.searchStr) != -1);

		if (this.state.sortItems)
			wordsCode.sort(this.mySort);

		wordsCode = wordsCode.map(v =>
			React.DOM.option({ key: v.code, className: 'listItem', }, v.name));


		return React.DOM.div({ className: 'filterMod' },
			React.DOM.input({ className: 'check', type: "checkbox", checked: this.state.sortItems, onChange: this.sortStr, }),
			React.DOM.input({ className: 'findeChar', type: "text", value: this.state.searchStr, onChange: this.filterChar, }),
			React.DOM.input({ className: 'resize', type: "button", value: "сброс", onClick: this.reset }),
			React.DOM.select({ className: 'List', size: "5" }, wordsCode),
		);

	},

});


