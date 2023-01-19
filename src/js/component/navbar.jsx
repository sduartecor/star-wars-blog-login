import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const { store, actions } = useContext(Context);

	return (
		<nav className="navbar bg-light">
			<div className="container d-flex justify-content-between">
  <div className="col">
  <Link className="navbar-brand" to="/">
  <img className="bg-black ms-5" id="local-nav-logo-desktop" src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo.jpg" alt="Star Wars Logo" style={{width: "100px"}}/>
	
    </Link>

  </div>
  <div className="dropdown" >
  <button className="btn btn-lg btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites <div className="badge bg-secondary text-wrap">{store.listFavorite.length}</div> 
  </button>
  <ul className="dropdown-menu" >
  {store.listFavorite.map((item, id) => <li className="dropdown-item float-start btnEliminar" key={id}>{item.name}<button type="button" className="btn border-0 float-end"  onClick={() => actions.deleteFavorite(item)}><i className="fa fa-trash"></i></button> </li>)}
  <li className={"dropdown-item disabled text-center " + store.mensaje} aria-disabled="true">(empty)</li>
  </ul>
</div>
</div>
</nav>
	);
};