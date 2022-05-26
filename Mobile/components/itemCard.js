import React from 'react';
import PropTypes from 'prop-types';
import './itemCard.css';
import { voteEvents } from './events';

class ItemCard extends React.PureComponent {

	state = {
		//idStr: this.props.data === undefined ? `${Math.floor(Math.random() * 100) + 1}` : this.props.code,
		fioStr: this.props.data ? this.props.data.fio : "",
		nameStr: this.props.data ? this.props.data.name : "",
		surnameStr: this.props.data ? this.props.data.surname : "",
		balanceStr: this.props.data ? this.props.data.balance : "",
		statusStr: this.props.data ? this.props.data.statusActivity : "",
	}


	newTextRef1 = null;
	newTextRef2 = null;
	newTextRef3 = null;
	newTextRef4 = null;
	newTextRef5 = null;


	setNewTextRef1 = (ref) => {
		this.newTextRef1 = ref;
	};
	setNewTextRef2 = (ref) => {
		this.newTextRef2 = ref;
	};
	setNewTextRef3 = (ref) => {
		this.newTextRef3 = ref;
	};
	setNewTextRef4 = (ref) => {
		this.newTextRef4 = ref;
	};
	setNewTextRef5 = (ref) => {
		this.newTextRef5 = ref;
	};

	editData = (code) => {
		voteEvents.emit('EditDataItem', code, { ...this.props.data, fio: this.state.fioStr, name: this.state.nameStr, surname: this.state.surnameStr, balance: this.state.balanceStr, statusActivity: this.state.statusStr });
	}






	validQuanity = (EO) => {
		if (EO.target.value === "" || isNaN(EO.target.value))
			this.setState({ errorQuanity: true });
		else {
			this.setState({ errorQuanity: false });
		}
	}



	saveItem = () => {

		if (this.newTextRef1) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
			let newFio = this.newTextRef1.value;
			this.setState({ fioStr: newFio });
		}

		if (this.newTextRef2) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
			let newName = this.newTextRef2.value;
			this.setState({ nameStr: newName });
		}
		if (this.newTextRef3) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
			let newSurname = this.newTextRef3.value;
			this.setState({ surnameStr: newSurname });
		}
		if (this.newTextRef4) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
			let newBalance = this.newTextRef4.value;
			this.setState({ balanceStr: newBalance });
		}
		if (this.newTextRef5) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
			let newStatus = this.newTextRef5.checked;
			this.setState({ statusStr: newStatus });
		}
		this.editData(this.props.code);
	}

	// AddItem = () => {
	// 	this.props.cbdiseableStart();
	// 	this.props.cbselectModeStart();
	// 	const data = { text: this.state.nameStr, code: this.state.idStr, count: + this.state.priceStr, price: + this.state.quanityStr, foto: this.state.urlStr };
	// 	this.props.cbAddItem(data);
	// 	this.setState({ idStr: this.state.idStr + 1 });
	// }
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

		if (this.props.startCardMode === "addproduct" || this.props.startCardMode === "editProduct") {
			return (
				<form name='INFO' method="POST" action='http://fe.it-academy.by/TestForm.php' >
					<label className={'formCard'}><br />
						Fio<input type='text' className={'dataCards'} defaultValue={this.state.fioStr} ref={this.setNewTextRef1} />
						<br></br>
						Name<input type='text' className={'dataCards'} defaultValue={this.state.nameStr} ref={this.setNewTextRef2} />
						<br></br>
						Surname<input type='text' className={'dataCards'} defaultValue={this.state.surnameStr} ref={this.setNewTextRef3} />
						<br></br>
						Balance<input type='text' className={'dataCards'} defaultValue={this.state.balanceStr} ref={this.setNewTextRef4} />
						<br></br>
						Status<input type="checkbox" className={'dataCards'} defaultChecked={this.state.statusStr} ref={this.setNewTextRef5} />
						<br></br>
						<input type='button' className={'formbutton'} value={this.props.startCardMode === 'addproduct' ? 'Добавить' : 'Сохранить'}
							onClick={this.props.startCardMode === 'addproduct' ? this.AddItem : this.saveItem}
							disabled={this.state.errorName || this.state.errorPrice || this.state.errorUrl || this.state.errorQuanity} /><input type='button' className={'formbutton'} value='отмена' onClick={this.cancel} />
					</label>
				</form>
			);
		}


	};
}
export default ItemCard;

