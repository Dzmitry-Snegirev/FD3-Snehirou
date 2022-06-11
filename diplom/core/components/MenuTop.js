import React from 'react';
import { Menu, Popup, } from 'semantic-ui-react';
import { connect } from 'react-redux';
import MenuBasket from './MenuBasket';

class MenuTop extends React.PureComponent {

	render() {

		let basketData = [...this.props.basket.items];
		let totalPrice = basketData.reduce((total, book) => total + book.price, 0);
		let count = basketData.length;


		return (
			<Menu>
				<Menu.Item
					name='browse'
				>
					Магазин книг
				</Menu.Item>

				<Menu.Menu position='right'>
					<Menu.Item
						name='signup'
					>
						Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
					</Menu.Item>

					<Popup
						trigger={
							<Menu.Item name="help">
								Корзина (<b>{count}</b>)
							</Menu.Item>
						}
						content={basketData.map((book) => <MenuBasket {...book} key={book.id} />)}
						on="click"
						hideOnScroll
					/>
				</Menu.Menu>
			</Menu>
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

export default connect(mapStateToProps)(MenuTop);



