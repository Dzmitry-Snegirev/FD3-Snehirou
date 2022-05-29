import React from 'react';
import PropTypes from 'prop-types';
import './itemCard.css';
import { voteEvents } from './events';

class ItemCard extends React.PureComponent {


	static propTypes = {
		data: PropTypes.shape({
			id: PropTypes.number.isRequired,
			fio: PropTypes.string.isRequired,
			balance: PropTypes.any.isRequired,
			name: PropTypes.string.isRequired,
			surname: PropTypes.string.isRequired,
			statusActivity: PropTypes.bool.isRequired,
		}),
		startCardMode: PropTypes.any.isRequired,
	};

	state = {
		idStr: this.props.data === undefined && `${this.addNewKey}`,
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


	addNewKey = () => {

		let max;
		let min = this.props.startClients[0].id;
		for (let i = 0; i < this.props.startClients.length; i++) {
			if ((this.props.startClients[i].id) < min) {
				min = this.props.startClients[i].id;
			} else {
				max = this.props.startClients[i].id;
			}
		}
		return max + 50;
	}

	saveItem = () => {
		let newFio, newName, newSurname, newBalance, newStatus;
		if (this.newTextRef1) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
			newFio = this.newTextRef1.value;
		}

		if (this.newTextRef2) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
			newName = this.newTextRef2.value;
		}
		if (this.newTextRef3) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
			newSurname = this.newTextRef3.value;
		}
		if (this.newTextRef4) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
			newBalance = this.newTextRef4.value;
		}
		if (this.newTextRef5) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
			newStatus = this.newTextRef5.checked;
		}
		if (this.props.startCardMode === 'addproduct') {
			this.setState({ statusStr: newStatus, balanceStr: newBalance, surnameStr: newSurname, nameStr: newName, fioStr: newFio }, this.AddItem);
		}
		if (this.props.startCardMode === 'editProduct') {
			this.setState({ statusStr: newStatus, balanceStr: newBalance, surnameStr: newSurname, nameStr: newName, fioStr: newFio }, this.editData);
		}
	}
	editData = () => {
		voteEvents.emit('EditDataItem', { ...this.props.data, fio: this.state.fioStr, name: this.state.nameStr, surname: this.state.surnameStr, balance: this.state.balanceStr, statusActivity: this.state.statusStr });
	}
	AddItem = () => {
		voteEvents.emit('AddItem', { ...this.props.data, fio: this.state.fioStr, name: this.state.nameStr, surname: this.state.surnameStr, balance: this.state.balanceStr, statusActivity: this.state.statusStr, key: this.addNewKey(this.state.idStr), id: this.addNewKey(this.state.idStr) });
	}

	cancel = () => {
		voteEvents.emit('Cancel', "")
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
							onClick={this.saveItem} />
						<input type='button' className={'formbutton'} value='отмена' onClick={this.cancel} />
					</label>
				</form>
			);
		}
	};
}
export default ItemCard;

