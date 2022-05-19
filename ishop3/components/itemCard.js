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

	state = {
		errorName: false,
		errorPrice: false,
		errorUrl: false,
		errorQuanity: false,
		idStr: this.props.data ? this.props.data.code : this.props.idItems + 1,
		nameStr: this.props.data ? this.props.data.text : "",
		priceStr: this.props.data ? this.props.data.count : "",
		urlStr: this.props.data ? this.props.data.foto : "",
		quanityStr: this.props.data ? this.props.data.price : "",
	}

	editField = () => {
		this.props.cbdiseable();
	}
	editName = (EO) => {
		this.props.cbdiseable();
		this.setState({ nameStr: EO.target.value });

	}
	editPrice = (EO) => {
		this.props.cbdiseable();
		this.setState({ priceStr: EO.target.value });
	}
	editUrl = (EO) => {
		this.props.cbdiseable();
		this.setState({ urlStr: EO.target.value });
	}
	editQuanity = (EO) => {
		this.props.cbdiseable();
		this.setState({ quanityStr: EO.target.value });
	}

	validName = (EO) => {
		if (EO.target.value === "" || EO.target.value.lenght < 5)
			this.setState({ errorName: true });
		else {
			this.setState({ errorName: false });
		}
	}
	validPrice = (EO) => {
		if (EO.target.value === "" || isNaN(EO.target.value))
			this.setState({ errorPrice: true });
		else {
			this.setState({ errorPrice: false });
		}
	}
	validURL = (EO) => {
		if (EO.target.value === "" || EO.target.value.lenght < 5)
			this.setState({ errorUrl: true });
		else {
			this.setState({ errorUrl: false });
		}
	}
	validQuanity = (EO) => {
		if (EO.target.value === "" || isNaN(EO.target.value))
			this.setState({ errorQuanity: true });
		else {
			this.setState({ errorQuanity: false });
		}
	}


	saveItem = () => {
		this.props.cbSaveItem({ ...this.props.data, text: this.state.nameStr, count: this.state.priceStr, foto: this.state.urlStr, price: this.state.quanityStr })
		this.props.cbdiseableStart();
		this.props.cbselectModeStart();
	}

	AddItem = () => {
		const data = { text: this.state.nameStr, code: this.state.idStr, count: + this.state.priceStr, price: + this.state.quanityStr, foto: this.state.urlStr };
		this.props.cbAddItem(data)
		this.props.cbdiseableStart();
		this.props.cbselectModeStart();
	}
	cancel = () => {
		this.props.cbdiseableStart();
		this.props.cbselectModeStart();
	}


	render() {

		if (this.props.startCardMode === 1) {
			return (
				<div className={'card'}>
					<div className={'textTitle'}>{this.props.data ? this.props.data.text : ""}</div>
					<div className={'countCard'}>{this.props.data ? this.props.data.count : ""}</div>
					<div className={'textCard'}>{this.props.data ? this.props.data.price : ""}</div>
				</div>
			)
		}

		if (this.props.startCardMode === "card" || "addproduct") {
			return (
				<form name='INFO' method="POST" action='http://fe.it-academy.by/TestForm.php' >
					<label className={'formCard'}><br />
						<div className={'dataCards'}>ID:{this.state.idStr}</div>
						Name<input type='text' className={'dataCards'} onChange={this.editName} onBlur={this.validName} value={this.state.nameStr} /><span className={'error'}
							style={{ display: (this.state.errorName) ? 'inline' : 'none' }}>заполните поле,введите текст</span><br />
						Price<input type='text' className={'dataCards'} onChange={this.editPrice} onBlur={this.validPrice} value={this.state.priceStr} /><span className={'error'}
							style={{ display: (this.state.errorPrice) ? 'inline' : 'none' }}>заполните поле,введите число</span><br />
						Url<input type='text' className={'dataCards'} onChange={this.editUrl} onBlur={this.validURL} value={this.state.urlStr} /><span className={'error'}
							style={{ display: (this.state.errorUrl) ? 'inline' : 'none' }}>заполните поле,введите url</span><br />
						Quanity<input type='text' className={'dataCards'} onChange={this.editQuanity} onBlur={this.validQuanity} value={this.state.quanityStr} /><span className={'error'}
							style={{ display: (this.state.errorQuanity) ? 'inline' : 'none' }}>заполните поле,введите число</span><br />
						<input type='button' className={'formbutton'} value={this.props.startCardMode === 'addproduct' ? 'Добавить' : 'Сохранить'}
							onClick={this.props.startCardMode === 'card' ? this.saveItem : this.AddItem}
							//	onClick={this.saveItem}
							disabled={this.state.errorName || this.state.errorPrice || this.state.errorUrl || this.state.errorQuanity} /><input type='button' className={'formbutton'} value='отмена' onClick={this.cancel} />
					</label>
				</form>
			);
		}


	};
}
export default ItemCard;

