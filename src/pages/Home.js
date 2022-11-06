import { Link } from "react-router-dom";
import "../css/home.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className="cards">
          <Link to="/">
            <div className="card card-one">
              <h2 className="description">HOME</h2>
            </div>
          </Link>
          <Link to="/Listofrepo">
            <div className="card card-two">
              <h2 className="description">LIST OF REPOSITORIES</h2>
            </div>
          </Link>
          <Link to="/Viewrepo">
            <div className="card card-three">
              <h2 className="description">VIEW REPOSITORIES</h2>
            </div>
          </Link>
          <Link to="/errorBoundary">
            <div className="card card-four">
              <h2 className="description">ERROR BOUNDARY TESTING</h2>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
