import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardVehiculos = () => {

	const {store, actions} = useContext(Context);

	function añadirFavoritos(item) {
		if (store.auth === true) {
			actions.addFavorite(item)
		} else {
			alert("Debe iniciar sesión")
		}
	}



    return(
		<>		{store.vehiculos.map((item, id) =>  <div  className="btn m-4 ms-0 col-auto rounded"  key={id}>
		<div className={"card bg-dark text-white border-danger " + actions.changeOpacity(item)} style={{width: "19rem", height: "20rem"}}>
		<Link style={{ textDecoration: "none" }}  to={"/detail-vehicle/"+ (item.url.match(/\d+/g)) }>
		<div className="border-bottom border-danger"><img src={"https://starwars-visualguide.com/assets/img/vehicles/"+ (item.url.match(/\d+/g)) +".jpg"}  className="card-img-top" alt="..."/></div>
	  <div className="card-body">
	  <p className="card-title fs-6 text-uppercase fw-bold text-start text-white">{item.name}</p>
	  </div>
	  </Link> 
	  <div className="card-footer border-danger"> 
	  <Link className="btn btn-outline-dark border-0" onClick={()=> añadirFavoritos(item)}><i className={actions.changeColor(item)}></i></Link>
	  </div>
	  </div>
	 
	  </div>)}
		</>

    );
}
