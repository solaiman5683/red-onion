import React from 'react';
import { Col } from 'react-bootstrap';

const Food = ({ food }) => {
	const { foodName, image, description, price } = food;
	return (
		<Col className='text-center'>
			<div className='food-item py-4 h-100'>
				<img width='300px' src={image} alt='' />
				<h4>{foodName}</h4>
				<p className='text-muted'>{description.slice(0, 30)}</p>
				<h5 className='price'>{price}</h5>
			</div>
		</Col>
	);
};

export default Food;
