import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const CardPersonajes = () => {

	const {store, actions} = useContext(Context);
	const navigate = useNavigate() 

	function añadirFavoritos(item) {
		if (store.auth === true) {
			actions.addFavorite(item)
		} else {
			alert("Hola")
		}
	}


    return(
		<>		{store.personajes.map((item, index) =>  <div className="btn m-4 ms-0 col-auto rounded"  key={index} >
		<div className={"card bg-dark text-white border-danger " + actions.changeOpacity(item)} style={{width: "16rem", height: "30rem"}} >
		<Link style={{ textDecoration: "none" }} to={"/detail-people/"+ (item.url.match(/\d+/g)) }>
	  <div className="border-bottom border-danger"><img src={"https://starwars-visualguide.com/assets/img/characters/"+ (item.url.match(/\d+/g)) +".jpg"}  className="card-img-top" alt="..."/></div>
	  <div className="card-body">
	  
	  <p className="card-title fs-6 text-uppercase fw-bold text-start text-white ">{item.name}</p>
	  
	  
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


