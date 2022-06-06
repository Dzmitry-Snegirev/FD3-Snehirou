import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react'
import { booksThunkAC } from "../redux/fetchThunk";

import BookCard from './components/BookCard';
import FilterMenu from './components/FilterMenu';
import MenuTop from './components/MenuTop';


class BooksList extends React.PureComponent {

	static propTypes = {
		books: PropTypes.object.isRequired,
	};

	componentDidMount() {
		if (!this.props.books.data) {
			this.props.dispatch(booksThunkAC(this.props.dispatch));
		}
	}

	render() {
		if (this.props.books.status <= 1)
			return "загрузка...";

		if (this.props.books.status === 2)
			return "ошибка загрузки данных";

		let booksData = this.props.books.data && this.props.books.data.map((book) =>
			<BookCard key={book.id} {...book} />
		);
		return (
			<Container className='booksshop'>
				<MenuTop />
				<FilterMenu setFilter={this.props.setFilter} />
				<Card.Group itemsPerRow={4}>
					{booksData}
				</Card.Group>
			</Container>
		);

	}

}

const mapStateToProps = function (state) {
	return {
		books: state.books,
	};
};


export default connect(mapStateToProps)(BooksList);
