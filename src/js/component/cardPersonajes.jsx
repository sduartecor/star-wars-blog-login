import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardPersonajes = () => {

	const [personajes, setPersonajes] = useState([]);

	//Obtengo lista del usuario
	function getList(){
		try {
			fetch('https://swapi.dev/api/people/', {
				method: "GET",
				headers: {
			"Content-Type": "application/json"
		  }
		}).then((response) => response.json()).then((data)=>{console.log(data); setPersonajes(data.results);});
		//
		} catch(e){
		console.log(e);
		}
	
		}

		useEffect(() => {getList()}, []);



    return(
		<>		{personajes.map((item, index) =>  <div className="m-4 ms-0" key={index}>
		<div className="card" style={{width: "15rem"}}>
	  <img src={"https://starwars-visualguide.com/assets/img/characters/"+ (index+1) +".jpg"}  className="card-img-top" alt="..."/>
	  <div className="card-body">
	  <h4 className="card-title">{item.name}</h4>
				<p className="card-text">Gender: {item.gender}</p>
				<p className="card-text">Hair color: {item.hair_color}</p>
				<p className="card-text">Eye color: {item.eye_color}</p>
				<div className="d-flex justify-content-between">
				<Link className="btn btn-outline-primary" to={"/detail-people/"+ (index+1) } >Learn More!</Link>
				<Link className="btn btn-outline-warning"><i className="fa fa-heart"></i></Link>
				</div>
	  </div>
	  </div>
	  </div> )}
		</>

    );
}


