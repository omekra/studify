import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Student <span>tracking</span> app
          </h1>
          <p>
            I'm baby xOXO readymade praxis unicorn schlitz wayfarers. Normcore
            kale chips DSA umami. Hoodie chartreuse bushwick kogi subway tile,
            drinking vinegar mustache.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="student track" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
