import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import { voteEvents } from './events';
class MobileClient extends React.PureComponent {

	static propTypes = {
		info: PropTypes.shape({
			id: PropTypes.number.isRequired,
			fio: PropTypes.string.isRequired,
			balance: PropTypes.any.isRequired,
			name: PropTypes.string.isRequired,
			surname: PropTypes.string.isRequired,
			statusActivity: PropTypes.bool.isRequired,
		}),
	};


	componentWillReceiveProps = () => {
		console.log("MobileClient id=" + this.props.info.id + " componentWillReceiveProps");

	};

	edit = () => {
		voteEvents.emit('Edititem', this.props.info.id);
	}
	del = () => {
		voteEvents.emit('del', this.props.info.id);
	}
	render() {
		console.log("MobileClient id=" + this.props.info.id + " render");
		return (
			<tr>
				<td className='item'>{this.props.info.fio}</td>
				<td className='item'>{this.props.info.name}</td>
				<td className='item'>{this.props.info.surname}</td>
				<td className='item'>{this.props.info.balance}</td>
				<td className='status' style={{ backgroundColor: (this.props.info.statusActivity) ? 'green' : 'red' }}
				>
					{this.props.info.statusActivity ? 'active' : 'blocked'}</td>
				<td>
					<input type="button" value="Редактировать" onClick={this.edit}
					/>
				</td>
				<td>	<input type="button" value="Удалить" onClick={this.del}
				/></td>
			</tr>
		);
	}


}

export default MobileClient;
