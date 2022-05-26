import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import { voteEvents } from './events';
class MobileClient extends React.PureComponent {

	// static propTypes = {
	//   info:PropTypes.shape({
	//     id: PropTypes.number.isRequired,
	//     fio: PropTypes.string.isRequired,
	//     balance: PropTypes.number.isRequired,
	//   }),
	// };

	state = {
		info: this.props.info,
		status: this.props.status,
		//	selectedLineCode: null,
	};

	componentWillReceiveProps = (newProps) => {
		console.log("MobileClient id=" + this.props.info.id + " componentWillReceiveProps");
		this.setState({ info: newProps.info });
	};

	edit = () => {
		voteEvents.emit('Edititem', this.state.info.id);
	}
	render() {

		console.log("MobileClient id=" + this.state.info.id + " render");

		return (
			<tr>
				<td className='item'>{this.state.info.fio}</td>
				<td className='item'>{this.state.info.name}</td>
				<td className='item'>{this.state.info.surname}</td>
				<td className='item'>{this.state.info.balance}</td>
				<td className='status' style={{ backgroundColor: (this.state.status) ? 'green' : 'red' }}
				>
					{this.state.status ? 'active' : 'blocked'}</td>
				<td>
					<input type="button" value="Редактировать" onClick={this.edit}
					/>
				</td>
				<td>	<input type="button" value="Удалить" onClick={this.state.setname}
				/></td>
			</tr>
		);

	}

}

export default MobileClient;
