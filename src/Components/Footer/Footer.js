import React from 'react';
import logo from '../../assets/images/logo.png';

const Footer = () => {
	return (
		<div className='bg-dark text-light'>
			<div className='container pt-5 pb-2'>
				<div className='row'>
					<div className='col-3'>
						<img width='200px' src={logo} alt='Footer Logo' />
					</div>
					<div className='col-5'></div>
					<div className='col-2'>
						<ul
							style={{
								listStyle: 'none',
								textAlign: 'right',
								lineHeight: '2rem',
							}}>
							<li>
								<a href='/'>About Online Food</a>
							</li>
							<li>
								<a href='/'>Read Our Blog</a>
							</li>
							<li>
								<a href='/'>Signup to deliver</a>
							</li>
							<li>
								<a href='/'>Add your Restaurant</a>
							</li>
						</ul>
					</div>
					<div className='col-2'>
						<ul
							style={{
								listStyle: 'none',
								textAlign: 'right',
								lineHeight: '2rem',
							}}>
							<li>
								<a href='/'>Get Helps</a>
							</li>
							<li>
								<a href='/'>Read FAQs</a>
							</li>
							<li>
								<a href='/'>View All Cities</a>
							</li>
							<li>
								<a href='/'>Restaurant near me</a>
							</li>
						</ul>
					</div>
				</div>
				<p className='row mt-5'>
					<div className='col-6'>
						<p className='text-muted'>Copyright &copy;2021 Online Food</p>
					</div>
					<div className='col-6' style={{ textAlign: 'right' }}>
						<span className='pe-0'>Privacy Policy</span>
						<span className='pe-0'>Terms of use</span>
						<span className='pe-0'>Pricing</span>
					</div>
				</p>
			</div>
		</div>
	);
};

export default Footer;
