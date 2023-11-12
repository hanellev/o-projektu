import './style.css';
import { Footer } from '../../components/Footer';

export const HomePage = () => {
	return (
		<div className="fs-6 fw-light">
			<img src="/img/banner.jpg" alt="banner"></img>
		  <p>...</p>
		  <p>
			Welcome to the intro website of our project!
			<br />
			Please, check the pages above to learn more about us.
		  </p>
		  <Footer />
		</div>
	  );
	};
	
