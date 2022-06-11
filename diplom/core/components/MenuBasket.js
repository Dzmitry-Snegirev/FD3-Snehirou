import React from 'react';
import { connect } from 'react-redux';
import { List, Button, Image } from "semantic-ui-react";
import { removeFromCart, } from '../../redux/cardAC';

class MenuBasket extends React.PureComponent {


	removeCard = (e, { }) => {
		this.props.dispatch(removeFromCart(this.props.id));
	};

	render() {


		return (

			<List selection divided verticalAlign="middle">
				<List.Item>
					<List.Content floated="right">
						<Button onClick={this.removeCard} color="red">
							Удалить
						</Button>
					</List.Content>
					<Image avatar src={this.props.image} />
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