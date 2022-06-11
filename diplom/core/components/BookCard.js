import React from 'react';
import { addToCart, removeFromCart } from '../../redux/cardAC';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

class BookCard extends React.PureComponent {


	addToCard = () => {
		let isItemCardInCard = this.props.basket.items.some(item => item.id === this.props.id);
		if (isItemCardInCard) {
			this.props.dispatch(removeFromCart(this.props.id));
		}
		else {
			this.props.dispatch(addToCart(this.props));
		}
	}
	render() {
		let basketData = [...this.props.basket.items];
		let addedCount = basketData.reduce((count, book) => count + (book.id === this.props.id ? 1 : 0), 0);
		var isItemCardInCard = basketData.some(item => item.id === this.props.id);
		return (
			<Card>
				<Image src={this.props.image} />
				<Card.Content>
					<Card.Header>{this.props.title}</Card.Header>
					<Card.Meta>
						<span className='date'>{this.props.author}</span>
					</Card.Meta>
				</Card.Content>
				<Card.Content extra>
					<a>
						<Icon name='rub' />
						{this.props.price}
					</a>
				</Card.Content>
				<Button onClick={this.addToCard}
					style={{ backgroundColor: (isItemCardInCard) ? 'darkseagreen' : '#cacbcd' }}>
					{isItemCardInCard ? "Удалить из корзины" : "Добавить в корзину"}
				</Button>
			</Card>
		);
	}

}

const mapStateToProps = function (state) {
	return {
		basket: state.basket,
	};
};

export default connect(mapStateToProps)(BookCard);
