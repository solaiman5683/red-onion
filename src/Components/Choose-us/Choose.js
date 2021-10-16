import React from 'react';
import { Row } from 'react-bootstrap';
import Card from '../Card/Card';

const Choose = () => {
	return (
		<div>
			<h2>Why you choose us</h2>
			<p className='text-muted w-50 mb-5'>
				Barton waited twenty always repair in within we do. An delighted
				offending curiosity my is dashwoods at. Boy prosperous increasing
				surrounded.
			</p>
			<Row xs={1} md={3} className='g-4'>
				<Card
					image='https://i.ibb.co/C7cXwXD/adult-blur-blurred-background-687824.png'
					icon='https://i.ibb.co/3yv19Bt/truck.png'
					title='Fast Delivery'
					description='Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.'
				/>
				<Card
					image='https://i.ibb.co/0q3x8Yz/chef-cook-food-33614.png'
					icon='https://i.ibb.co/L5FMK6f/bell.png'
					title='A Good Auto Responder'
					description='Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.'
				/>
				<Card
					image='https://i.ibb.co/cwX3DQX/architecture-building-city-2047397.png'
					icon='https://i.ibb.co/Wgjz61n/bus.png'
					title='Home Delivery'
					description='Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.'
				/>
			</Row>
		</div>
	);
};

export default Choose;
