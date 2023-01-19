import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPlanetas = () => {

	const {store, actions} = useContext(Context);

    return(
		<>		{store.planetas.map((item, id) => <div className="btn m-4 ms-0 col-auto rounded"  key={id}>
		<div className="card bg-dark text-white border-danger" style={{width: "16rem", height: "24rem"}}>
		<Link style={{ textDecoration: "none" }} to={"/detail-planet/"+ (item.url.match(/\d+/g)) }>
		<div className="border-bottom border-danger"><img src={"https://starwars-visualguide.com/assets/img/planets/"+ (item.url.match(/\d+/g)) +".jpg"}  className="card-img-top" alt="..."/></div>
	  <div className="card-body">
	  <p className="card-title fs-6 text-uppercase fw-bold text-start text-white ">{item.name}</p>
	  </div>
	  </Link> 
	  <div className="card-footer border-danger"> 
	  <Link className="btn btn-outline-dark border-0" onClick={()=> actions.addFavorite(item)}><i className={actions.changeColor(item)}></i></Link>
	  </div>
	  </div>
	 
	  </div>)}
		</>

    );
}