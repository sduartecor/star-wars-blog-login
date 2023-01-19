import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const { store, actions } = useContext(Context);

	return (
    <nav className="navbar bg-dark border border-secondary border-end-0 border-start-0">
    <div className="container d-flex justify-content-start ms-0">
<div className="col d-flex align-item-center text-start">
<Link className="navbar-brand text-white" to="/">

<h2 className="text-white">BROWSE DATABANK //</h2>

  </Link>

</div>

<div className="dropdown d-flex float-end" >
  <button className="btn btn-lg btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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