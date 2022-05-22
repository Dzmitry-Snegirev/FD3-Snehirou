import React from 'react';


class RainbowFrame extends React.Component {

	render() {
		let code = this.props.children;
		this.props.colors.forEach((element) =>
			code = <div style={{ backgroundColor: element, padding: "10px", color: "white", textAlign: "center" }}>{code}</div>);
		return code;
	}

};

export default RainbowFrame;
