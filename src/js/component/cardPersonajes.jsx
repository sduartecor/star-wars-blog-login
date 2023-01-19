import React, { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardPersonajes = () => {

	const {store, actions} = useContext(Context);


    return(
		<>		{store.personajes.map((item, index) =>  <div className="m-4 ms-0" key={index}>
		<div className="card h-100" style={{width: "18rem"}}>
	  <img src={"https://starwars-visualguide.com/assets/img/characters/"+ (item.url.match(/\d+/g)) +".jpg"}  className="card-img-top" alt="..."/>
	  <div className="card-body">
	  <h4 className="card-title">{item.name}</h4>
				
				<ul className="list-group list-group-flush">
				<li className="list-group-item"></li>
    <li className="list-group-item">Gender: <strong>{item.gender}</strong></li>
    <li className="list-group-item">Hair color: <strong>{item.hair_color}</strong></li>
    <li className="list-group-item">Eye color: <strong>{item.eye_color}</strong></li>
	<li className="list-group-item"></li>
  </ul>

				<div className="d-flex justify-content-between">
				<Link className="btn btn-outline-primary" to={"/detail-people/"+ (item.url.match(/\d+/g)) } >Learn More!</Link>
				<Link className="btn btn-outline-light" onClick={()=> actions.addFavorite(item)}><i className={actions.changeColor(item)}></i></Link>
				</div>
	  </div>
	  </div>
	  </div> )}
		</>

    );
}


