import './style.css';
import Banner from './img/banner-min.jpg';

export const HomePage = () => {
  return (
    <div className="fs-6 fw-light">
      <div className="container-co">
        <img className="card-img-top" src={Banner} alt="banner"></img>
      </div>

      <p>...</p>
      <p>
        Welcome to the intro website of our project!
        <br />
        Please, check the pages above to learn more about us.
      </p>
    </div>
  );
};
