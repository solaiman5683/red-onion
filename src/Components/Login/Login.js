import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loginBG from '../../assets/images/loginBG.png';
import logo2 from '../../assets/images/logo2.png';
import { useAuth } from '../../Context/AuthContext';
import { useHistory } from 'react-router';

const Login = () => {
	const { user, handleGoogleLogin, handleLogin } = useAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
	console.log(user);
	const handleGoogle = () => {
		handleGoogleLogin();
	};
	const handleUserLogin = () => {
		handleLogin(email, password);
	};

	useEffect(() => {
		if (user.displayName) {
			history.push('/');
		}
	});
	return (
		<div
			style={{
				backgroundImage: `url(${loginBG})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center bottom',
				minHeight: '80vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<div className='py-3 px-5 shadow-sm rounded text-center my-5'>
				<img src={logo2} alt='Logo' width='250px' className='py-5' />
				<div className='mb-5'>
					<input
						type='email'
						className='form-control text-muted p-3 my-3 border-0 shadow-sm'
						placeholder='Email *'
						onBlur={e => setEmail(e.target.value)}
					/>
					<input
						type='password'
						className='form-control text-muted p-3 my-3 border-0 shadow-sm'
						placeholder='Password *'
						onBlur={e => setPassword(e.target.value)}
					/>
					<span
						className='form-control bg-red text-muted p-3 my-3 border-0 shadow-sm'
						onClick={handleUserLogin}>
						Log in
					</span>
					<Link to='/signup'>Don't have an Account?</Link>
					<button
						onClick={handleGoogle}
						className='btn shadow text-muted d-block mx-auto mt-4 rounded-pill py-2 px-4'>
						Sign in with Google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
