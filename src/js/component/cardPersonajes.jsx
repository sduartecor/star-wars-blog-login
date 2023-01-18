import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardPersonajes = () => {

	const {store, actions} = useContext(Context);


    return(
		<>		{store.personajes.map((item, index) =>  <div className="m-4 ms-0" key={index}>
		<div className="card h-100" style={{width: "18rem"}}>
	  <img src={"https://starwars-visualguide.com/assets/img/characters/"+ (index+1) +".jpg"}  className="card-img-top" alt="..."/>
	  <div className="card-body">
	  <h4 className="card-title">{item.name}</h4>
				
				<ul className="list-group list-group-flush">
				<li className="list-group-item"></li>
    <li className="list-group-item">Gender: {item.gender}</li>
    <li className="list-group-item">Hair color: {item.hair_color}</li>
    <li className="list-group-item">Eye color: {item.eye_color}</li>
	<li className="list-group-item"></li>
  </ul>

				<div className="d-flex justify-content-between">
				<Link className="btn btn-outline-primary" to={"/detail-people/"+ (index+1) } >Learn More!</Link>
				<Link className="btn btn-outline-light" onClick={()=> actions.addFavorite(item)}><i className={actions.changeColor(item)}></i></Link>
				</div>
	  </div>
	  </div>
	  </div> )}
		</>

    );
}


