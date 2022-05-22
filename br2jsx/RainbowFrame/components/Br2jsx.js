import React from 'react';


class Br2jsx extends React.Component {
	render() {
		const words = this.props.text.split(/<br\s*\/?>/);
		const lines = [];
		words.forEach((element, i) => {
			if (i)
				lines.push(<br />)
			lines.push(element)
		});
		return <div style={{ color: "white", fontSize: "2em" }}>{lines}</div>;
	}

};

export default Br2jsx;
