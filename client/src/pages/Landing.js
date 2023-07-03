import logo from "../assets/images/logo-s.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="studify" className="logo" />
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
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="student track" className="img main-img" />
      </div>
    </main>
  );
};
export default Landing;
