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

	}

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
					<input className={'edit'} type={'button'} value={'Редактирвать'} onClick={this.delLine}></input>
					<input className={'reset'} type={'button'} value={'Удалить'} onClick={this.delLine}></input>
				</td>
			</tr>


		</tbody>)


		return React.DOM.tbody({ className: 'items' },
			React.DOM.tr({
				className: 'info', onClick: this.selectLine,
				style: { backgroundColor: (this.props.startCode === this.props.code) ? 'orange' : 'white' }
			},
				React.DOM.td({ className: 'Text' }, this.props.text,),
				React.DOM.td({ className: 'Count' }, this.props.count,),
				React.DOM.td({ className: 'Text' }, this.props.price,),
				React.DOM.td({ className: 'Foto' }, React.DOM.img({ className: 'FotoItem', src: this.props.foto })),
				React.DOM.td({ className: 'button' }, React.DOM.input({ className: 'reset', type: "button", value: "Удалить", onClick: this.delLine })),
			))
	}
};

export default ProductLine;


