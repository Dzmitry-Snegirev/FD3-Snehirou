import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react'
class BookCard extends React.PureComponent {
	render() {
		return (
			<Card>
				<Image src={this.props.image} />
				<Card.Content>
					<Card.Header>{this.props.title}</Card.Header>
					<Card.Meta>
						<span className='date'>{this.props.author}</span>
					</Card.Meta>

				</Card.Content>
				<Card.Content extra>
					<a>
						<Icon name='rub' />
						{this.props.price}
					</a>
				</Card.Content>
			</Card>
		);

	}

}

export default BookCard;
