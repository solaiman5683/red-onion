import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loginBG from '../../assets/images/loginBG.png';
import logo2 from '../../assets/images/logo2.png';
import { useAuth } from '../../Context/AuthContext';
import { useHistory } from 'react-router';

const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const history = useHistory();
	const { user, handleRegister } = useAuth();

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
			<div className='p-5 shadow rounded text-center my-5'>
				<img src={logo2} alt='Logo' width='250px' className='py-5' />
				<div className='mb-5'>
					<input
						type='text'
						className='form-control text-muted p-3 my-3 border-0 shadow-sm'
						placeholder='Name'
						onBlur={e => setName(e.target.value)}
					/>
					<input
						type='email'
						className='form-control text-muted p-3 my-3 border-0 shadow-sm'
						placeholder='Email*'
						onBlur={e => setEmail(e.target.value)}
					/>
					<input
						type='password'
						className='form-control text-muted p-3 my-3 border-0 shadow-sm'
						placeholder='Password'
						onBlur={e => setPassword(e.target.value)}
					/>
					<input
						type='password'
						className='form-control text-muted p-3 my-3 border-0 shadow-sm'
						placeholder='Confirm Password'
						onBlur={e =>
							password === e.target.value && setConfirmPassword(e.target.value)
						}
					/>
					<span
						type='button'
						className='form-control bg-red text-muted p-3 my-3 border-0 shadow-sm'
						onClick={() => handleRegister(name, email, confirmPassword)}>
						Sign in
					</span>
					<Link to='/login'>Already registered ?</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
