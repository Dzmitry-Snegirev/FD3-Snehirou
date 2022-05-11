import React from 'react';
import PropTypes from 'prop-types';
import './itemCard.css';

class ItemCard extends React.Component {

	// static propTypes = {
	// 	text: PropTypes.string.isRequired,
	// 	count: PropTypes.number.isRequired,
	// 	price: PropTypes.number.isRequired,
	// 	code: PropTypes.number.isRequired,
	// };

	render() {
		return (
			<div className={'card'}>
				<div className={'textTitle'}>{this.props.data.text}</div>
				<div className={'countCard'}>{this.props.data.count}</div>
				<div className={'textCard'}>{this.props.data.price}</div>
			</div>
		)
	}
};
export default ItemCard;