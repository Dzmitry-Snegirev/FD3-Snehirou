import React from 'react';
import { connect } from 'react-redux';
import { List, Button, Image } from "semantic-ui-react";


class MenuBasket extends React.PureComponent {

	render() {
		// let basketData = [...this.props.basket.items];
		// let totalPrice = basketData.reduce((total, book) => total + book.price, 0);
		// let count = basketData.length;


		return (
			<List selection divided verticalAlign="middle">
				<List.Item>
					<List.Content floated="right">
						<Button onClick={removeFromCart.bind(this, id)} color="red">
							Удалить
						</Button>
					</List.Content>
					<Image avatar src={image} />
					<List.Content>{title}</List.Content>
				</List.Item>
			</List>
		);

	}

}


const mapStateToProps = function (state) {
	return {
		basket: state.basket,
	};
};
// const mapDispatchToProps = dispatch => ({
// 	setQeryAC: value => dispatch(setQeryAC(value)),
// 	setFilterAC: name => dispatch(setFilterAC(name)),
// });

export default connect(mapStateToProps)(MenuBasket);