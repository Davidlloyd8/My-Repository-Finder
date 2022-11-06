import "../css/navigation.css";
import { NavLink } from "react-router-dom";
function Navigation() {
    const navBar = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      };
  

  return (
    <>
      <div className="topnav" id="myTopnav">
      <NavLink to="/" className="logo">
        AltSchool
      </NavLink>
      <NavLink to="/" className="nav-link">
        HOME
      </NavLink>
      <NavLink to="/Listofrepo" className="nav-link">
        LIST OF REPOSITORIES
      </NavLink>
      <NavLink to="/Viewrepo" className="nav-link">
        VIEW REPOSITORIES
      </NavLink>
      <NavLink className="icon" onClick={navBar}>
        <i className="fa fa-bars"></i>
      </NavLink>
    </div>
    </>
  );
}
export default Navigation;
