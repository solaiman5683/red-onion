import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Card = ({ image, icon, title, description }) => {
	return (
		<div>
			<img src={image} alt='Some Images' width='100%' />
			<Row className='p-4'>
				<Col md='2'>
					<img src={icon} alt='Icon' />
				</Col>
				<Col md='10'>
					<h4>{title}</h4>
					<p className='text-muted'>{description}</p>
				</Col>
			</Row>
		</div>
	);
};

export default Card;
