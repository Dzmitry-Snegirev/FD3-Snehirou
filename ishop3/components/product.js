import React from 'react';
import PropTypes from 'prop-types';
import './product.css';


class ProductLine extends React.Component {

	static propTypes = {
		text: PropTypes.string.isRequired,
		count: PropTypes.number.isRequired,
		price: PropTypes.number.isRequired,
		code: PropTypes.number.isRequired,
	};


	selectLine = (eo) => {
		this.props.cbSelected(this.props.code);
		this.props.cbcard(this.props.code);
	}

	// selectcard = (eo) => {
	// 	this.props.cbSelected(this.props.code);
	// 	this.props.cbcard(this.props.code);
	// }

	delLine = (eo) => {
		const conf = confirm(`Вы уверены?`);
		eo.stopPropagation();
		conf ? this.props.cbdel(this.props.code) : this.selectLine
	}



	render() {
		return (<tbody className={'items'}>
			<tr className={'info'} onClick={this.selectLine} style={{ backgroundColor: (this.props.startCode === this.props.code) ? 'orange' : 'white' }}>
				<td className={'Text'}>{this.props.text}</td>
				<td className={'Count'}>{this.props.count}</td>
				<td className={'Text'}>{this.props.price}</td>
				<td className={'Foto'}>
					<img className={'FotoItem'} src={this.props.foto}></img>
				</td>
				<td className={'button'}>
					<input className={'edit'} type={'button'} value={'Редактировать'} onClick={this.selectLine}
						style={{ backgroundColor: (this.props.startCode === this.props.code) ? 'orange' : 'white' }}>
					</input>
					<input className={'reset'} type={'button'} value={'Удалить'} onClick={this.delLine}></input>
				</td>
			</tr>

		</tbody>)
	}
};

export default ProductLine;


