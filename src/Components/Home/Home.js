import Choose from '../Choose-us/Choose';
import Foods from '../Foods/Foods';
import Header from '../Header/Header';

const Home = () => {
	return (
		<div>
			<Header />
			<div className='container'>
				<Foods />
				<Choose />
			</div>
		</div>
	);
};

export default Home;
