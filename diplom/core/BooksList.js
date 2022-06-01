import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { booksThunkAC } from "../redux/fetchThunk";

class BooksList extends React.PureComponent {

	static propTypes = {
		books: PropTypes.object.isRequired,
	};

	componentDidMount() {
		this.props.dispatch(booksThunkAC(this.props.dispatch));
	}

	render() {

		if (this.props.books.status <= 1)
			return "загрузка...";

		if (this.props.books.status === 2)
			return "ошибка загрузки данных";

		return (
			<ul>
				{
					this.props.books.data.map((countryInfo, index) => <li key={index}>{countryInfo[1]}</li>)
				}
			</ul>
		);

	}

}

const mapStateToProps = function (state) {
	return {
		books: state.books,
	};
};

export default connect(mapStateToProps)(BooksList);
