import React from 'react';
import './DoubleButton.css';

class DoubleButton extends React.Component {
	press = (code) => {
		this.props.cbPressed(code)
	}
	render() {
		let code = this.props.children;
		return (<div className='buttons'>
			<input type={'button'} className='but' onClick={() => this.press(5)} value={this.props.caption1}  ></input>
			{code}
			<input type={'button'} className='but' onClick={() => this.press(6)} value={this.props.caption2} ></input>
		</div>)
	}

};

export default DoubleButton;
