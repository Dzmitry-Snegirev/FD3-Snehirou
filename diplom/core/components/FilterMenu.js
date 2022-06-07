import React from 'react';
import { connect } from 'react-redux';
import { setFilterAC } from '../../redux/booksAC';
import { setQeryAC } from '../../redux/booksAC';
import { Menu, Input } from 'semantic-ui-react'


class FilterMenu extends React.PureComponent {

	state = {
		activeItem: 'all',
		searchQuery: "",
	}

	handleItemClick = (e, { name }) => {
		this.props.dispatch(setFilterAC(this.props.data, name));
		this.setState({ activeItem: name })
	};

	render() {
		const { activeItem } = this.state;


		return (
			<Menu secondary>
				<Menu.Item
					name="all"
					active={activeItem === 'all'}
					onClick={this.handleItemClick}
				>Все</Menu.Item>

				<Menu.Item
					name="price_high"
					active={activeItem === 'price_high'}
					onClick={this.handleItemClick}
				>Цена(дорогие)</Menu.Item>
				<Menu.Item
					name="price_low"
					active={activeItem === 'price_low'}
					onClick={this.handleItemClick}
				>Цена (дешевые)</Menu.Item>
				<Menu.Item
					name="author"
					active={activeItem === 'author'}
					onClick={this.handleItemClick}
				>Автор</Menu.Item>
				<Menu.Item>
					<Input icon="search" placeholder="Введтите запрос" onChange={e => setQeryAC(e.target.value)}></Input>
				</Menu.Item>
			</Menu>
		)
	}

}
const mapStateToProps = function (state) {
	return {
		books: state.books,
	};
};

export default connect(mapStateToProps)(FilterMenu);
