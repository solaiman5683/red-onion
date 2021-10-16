import React, { createContext, useContext } from 'react';
import useFoods from '../hooks/useFoods';
const MyFoodContext = createContext();

export const useFoodsContext = () => useContext(MyFoodContext);

const FoodProvider = ({ children }) => {
	const foods = useFoods();
	return (
		<MyFoodContext.Provider value={foods}>{children}</MyFoodContext.Provider>
	);
};

export default FoodProvider;
