import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo2 from '../../assets/images/logo2.png';
import { useAuth } from '../../Context/AuthContext';
import cart from './cart.svg';

const Navigation = () => {
	const { user, logout } = useAuth();
	return (
		<Navbar bg='light' variant='light' className='py-3 shadow-sm sticky-top'>
			<Container>
				<Navbar.Brand>
					<Link to='/home'>
						<img width='150px' src={logo2} alt='' />
					</Link>
				</Navbar.Brand>
				<Nav className='ms-auto d-flex align-items-center'>
					<span type='button' class='btn position-relative'>
						<img width='25px' src={cart} alt='Cart' />
						<span class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark'>
							0<span class='visually-hidden'>Cart Item</span>
						</span>
					</span>
					{!user.displayName && (
						<div>
							<span>
								<Link to='/login'>Login</Link>
							</span>
							<span className='btnRed'>
								<Link to='/signup'>Sign up</Link>
							</span>
						</div>
					)}
					<span className='pe-0'>
						{user.photoURL ? (
							<img
								width='50px'
								src={user.photoURL}
								alt={user?.displayName}
								title={user?.displayName}
								className='ps-2 rounded-circle'
							/>
						) : (
							user?.displayName
						)}
					</span>
					<span>
						{user?.displayName && (
							<span className='btnRed' onClick={logout}>
								Logout
							</span>
						)}
					</span>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navigation;
