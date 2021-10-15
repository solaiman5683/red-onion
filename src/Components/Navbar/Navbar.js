import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo2 from '../../assets/images/logo2.png';
import cart from './cart.svg';

const Navigation = () => {
	return (
		<Navbar bg='light' variant='light' className='py-3 shadow-sm sticky-top'>
			<Container>
				<Navbar.Brand href='#home'>
					<img width='150px' src={logo2} alt='' />
				</Navbar.Brand>
				<Nav className='ms-auto'>
					<img width='25px' src={cart} alt='Cart' />
					<span>Login</span>
					<span className='btnRed'>Sign up</span>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navigation;
