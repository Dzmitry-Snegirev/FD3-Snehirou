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


	getFilterItems = () => {
		const newState = [...this.props.books.data];

		if (this.props.books.filterBy == "price_high") {
			newState.sort((a, b) =>
				a.price > b.price ? -1 : 1);
			return newState;
		}
		else if (this.props.books.filterBy == "price_low") {
			newState.sort((a, b) =>
				a.price < b.price ? -1 : 1);
			return newState;
		}
		else if (this.props.books.filterBy == "author") {
			newState.sort((a, b) =>
				a.author > b.author ? 1 : -1);
			return newState;
		}
		else {
			return newState;

		}
	}

	render() {
		if (this.props.books.status <= 1)
			return "загрузка...";

		if (this.props.books.status === 2)
			return "ошибка загрузки данных";

		let booksData = this.props.books.data && this.getFilterItems().map(book =>
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
