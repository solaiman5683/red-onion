import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useFoodsContext } from '../../Context/FoodContext';

const FoodDetails = () => {
	const [quantity, setQuantity] = useState(1);
	const { foodId } = useParams();
	const foods = useFoodsContext();
	// console.group(foodId, foods);
	const filteredItem = foods.find(
		food => food.foodName.toLowerCase().replaceAll(' ', '-') === foodId
	);
	const price = parseFloat(filteredItem?.price.replace('$', ''));
	const totalPrice = price * quantity;
	// if (quantity < 0) {
	// 	setQuantity(0);
	// }
	const btnStyle = { background: 'transparent', border: 'none' };
	return (
		<div className='p-5' style={{ minHeight: '80vh' }}>
			<div className='container'>
				<small>
					<Link to='/home'>Back to Home</Link>
				</small>
				<div className='row' style={{ display: 'flex', alignItems: 'center' }}>
					<div className='col-4'>
						<h1 className='text-dark'>{filteredItem?.foodName}</h1>
						<small className='text-muted'>{filteredItem?.description}</small>
						<div className='d-flex align-items-center justify-content-between'>
							<h3 className='py-3'>${totalPrice.toFixed(2)}</h3>
							<div className='p-2 py-3 m-5 border shadow-sm rounded-pill w-50 d-flex justify-content-between'>
								<button
									className='fs-5 px-3'
									disabled={quantity <= 0 ? true : false}
									style={btnStyle}
									onClick={() => setQuantity(prev => prev - 1)}>
									-
								</button>
								<input
									className='fs-4 text-center w-75 p-0'
									type='text'
									value={quantity}
									onChange={e =>
										!e.target.value
											? 0
											: setQuantity(parseFloat(e.target.value))
									}
								/>
								<button
									className='fs-5 px-3'
									style={btnStyle}
									onClick={() => setQuantity(prev => prev + 1)}>
									+
								</button>
							</div>
						</div>
					</div>
					<div className='col-8' style={{ textAlign: 'right' }}>
						<img
							src={filteredItem?.image}
							alt={filteredItem?.foodName}
							width='70%'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodDetails;
