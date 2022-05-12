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
	editField = () => {
		this.props.cbdiseable();
	}

	render() {
		if (this.props.startCardMode === false) {
			return (
				<div className={'card'}>
					<div className={'textTitle'}>{this.props.data.text}</div>
					<div className={'countCard'}>{this.props.data.count}</div>
					<div className={'textCard'}>{this.props.data.price}</div>
				</div>
			)
		}
		else {
			return (
				<form name='INFO' method="POST" action='http://fe.it-academy.by/TestForm.php' >
					<label className={'formCard'}><br />
						<div className={'dataCards'}>ID:{this.props.data.code}</div>
						Name<input type='text' className={'dataCards'} onFocus={this.editField} /><br />
						Price<input type='text' className={'dataCards'} onFocus={this.editField} /><br />
						Url<input type='text' className={'dataCards'} onFocus={this.editField} /><br />
						Quanity<input type='text' className={'dataCards'} onFocus={this.editField} /><br />
						<input type='button' className={'formbutton'} value='сохранить' onFocus={this.editField} /><input type='button' className={'formbutton'} value='отмена' onClick={this.cancel} />
					</label>
				</form>
			);
		}


	};
}
export default ItemCard;

