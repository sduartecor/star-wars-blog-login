import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-light">
			<div className="container d-flex justify-content-between">
  <div className="col">
  <Link className="navbar-brand" to="/">
  <img className="bg-black ms-5" id="local-nav-logo-desktop" src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo.jpg" alt="Star Wars Logo" style={{width: "70px"}}/>
	
    </Link>

  </div>
  <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</div>
</nav>
	);
};