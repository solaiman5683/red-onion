import { useEffect, useState } from 'react';

const useFoods = () => {
	const [foods, setFoods] = useState([]);
	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/solaiman5683/foodJson/main/food.json'
		)
			.then(res => res.json())
			.then(data => setFoods(data));
	}, []);
	return foods;
};

export default useFoods;
