import React from 'react';

function withRainbowFrame(colors) {
	return function (Component) {
		class CompWithRainbowFrame extends React.Component {
			render() {
				let code = <Component {...this.props} />;
				colors.forEach((element) =>
					code = <div style={{ backgroundColor: element, padding: "10px", color: "white", textAlign: "center" }}>{code}</div>);
				return code;
			}
		};
		return CompWithRainbowFrame;
	};
}

export { withRainbowFrame };
