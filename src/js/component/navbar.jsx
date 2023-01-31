import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

  const { store, actions } = useContext(Context);
  const navigate = useNavigate() 

  function handleLogout() {
		actions.logoutUser()
		navigate("/login")

	}

	return (
    <nav className="navbar bg-dark border border-secondary border-end-0 border-start-0">
    <div className="container d-flex justify-content-start ms-0">
<div className="col d-flex align-item-center text-start">
<Link className="navbar-brand text-white" to="/">

<h2 className="text-white">BROWSE DATABANK //</h2>

  </Link>

</div>

<div className="dropdown d-flex float-end me-3" >
<Link type="btn btn-lg" to={"/login"} className={"btn btn-outline-danger " + store.viewAuth}>Log in</Link>
</div>

<div className="dropdown d-flex float-end me-3" >
<Link type="btn btn-lg" to={"/signup"} className={"btn btn-danger " + store.viewAuth}>Sign up</Link>
</div>

<div className="dropdown d-flex float-end me-3" >
<button type="btn btn-lg" onClick={handleLogout} className={"btn btn-outline-danger " + store.hideAuth}>Log out</button>
</div>

<div className={"dropdown d-flex float-end " + store.hideAuth} >
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