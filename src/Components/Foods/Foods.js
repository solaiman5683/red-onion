import React, { useState } from 'react';
import { useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Food from '../Food/Food';

const Foods = () => {
	const [key, setKey] = useState('home');
	const [foods, setFoods] = useState([]);
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/solaiman5683/foodJson/main/food.json'
		)
			.then(res => res.json())
			.then(data => setFoods(data));
	}, []);

	const breakfast = foods.filter(food => food.catagory === 'breakfast');
	const lunch = foods.filter(food => food.catagory === 'lunch');
	const dinner = foods.filter(food => food.catagory === 'dinner');

	return (
		<div className='my-3 text-center'>
			<Tabs
				variant='pills'
				id='controlled-tab-example'
				activeKey={key}
				onSelect={k => setKey(k)}
				className='justify-content-center mt-5 mb-3'>
				<Tab eventKey='home' title='Breakfast'>
					<Row xs={1} md={3} className='g-4'>
						{breakfast.map(food => (
							<Food key={food._id} food={food} />
						))}
					</Row>
				</Tab>
				<Tab eventKey='profile' title='Lunch'>
					<Row xs={1} md={3} className='g-4'>
						{lunch.map(food => (
							<Food key={food._id} food={food} />
						))}
					</Row>
				</Tab>
				<Tab eventKey='contact' title='Dinner'>
					<Row xs={1} md={3} className='g-4'>
						{dinner.map(food => (
							<Food key={food._id} food={food} />
						))}
					</Row>
				</Tab>
			</Tabs>
			<button className='checkout-btn my-5'>Chekout Your Foods</button>
		</div>
	);
};

export default Foods;
