import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehiculos = () => {

	const {store, actions} = useContext(Context);


    return(
		<>		{store.vehiculos.map((item, id) =>  <div className="m-4 ms-0" key={id}>
		<div className="card h-100" style={{width: "18rem"}}>
	  <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (item.uid) + ".jpg"} className="card-img-top" alt="..."/>
	  <div className="card-body">
	  <h4 className="card-title">{item.name}</h4>

				<div className="d-flex justify-content-between align-items-end">
				<Link className="btn btn-outline-primary" to={"/detail-vehicle/"+ (item.uid) } >Learn More!</Link>
				<Link className="btn btn-outline-light" onClick={()=> actions.addFavorite(item)}><i className={actions.changeColor(item)}></i></Link>
				</div>
				
	  </div>
	  </div>
	  </div> )}
		</>

    );
}
