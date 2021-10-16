import bannerbackground from '../../assets/images/bannerbackground.png';
import './Header.css';

const Header = () => {
	const styleContainer = {
		height: '600px',
		backgroundImage: `url(${bannerbackground})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	};
	return (
		<div style={styleContainer}>
			<h1>Best Food Waiting for You ... </h1>
			<div className='input-box'>
				<input type='text' className='w-75' placeholder='Search Food items' />
				<button
					className='btnRed'
					style={{ padding: '10px 25px', border: 'none', borderRadius: '0' }}>
					Search
				</button>
			</div>
		</div>
	);
};

export default Header;
