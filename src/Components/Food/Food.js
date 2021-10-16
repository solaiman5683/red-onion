import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Food = ({ food }) => {
	const { foodName, image, description, price } = food;
	const url = foodName.toLowerCase().replaceAll(' ', '-');
	return (
		<Col className='text-center'>
			<div className='food-item py-4 h-100'>
				<img width='300px' src={image} alt='' />
				<Link to={`food/${url}`}>
					<h4>{foodName}</h4>
				</Link>
				<p className='text-muted'>{description.slice(0, 30)}</p>
				<h5 className='price'>{price}</h5>
			</div>
		</Col>
	);
};

export default Food;
