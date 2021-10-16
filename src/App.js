import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import FoodDetails from './Components/Food-details/Food-details';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navigation from './Components/Navbar/Navbar';
import Signup from './Components/sign-up/Signup';
import AuthProvider from './Context/AuthContext';
import FoodProvider from './Context/FoodContext';

function App() {
	return (
		<>
			<AuthProvider>
				<FoodProvider>
					<Router>
						<Navigation />
						<Switch>
							<Route exact path='/'>
								<Home />
							</Route>
							<Route path='/home'>
								<Home />
							</Route>
							<Route path='/food/:foodId'>
								<FoodDetails />
							</Route>
							<Route path='/login'>
								<Login />
							</Route>
							<Route path='/signup'>
								<Signup />
							</Route>
						</Switch>
						<Footer />
					</Router>
				</FoodProvider>
			</AuthProvider>
		</>
	);
}

export default App;
