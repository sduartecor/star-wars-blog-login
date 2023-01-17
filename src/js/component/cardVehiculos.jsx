import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehiculos = () => {

	const [vehiculos, setVehiculos] = useState([]);


	//Obtengo lista del usuario
	function getList(){
		try {
			fetch('https://swapi.tech/api/vehicles/', {
				method: "GET",
				headers: {
			"Content-Type": "application/json"
		  }
		}).then((response) => response.json()).then((data)=>{console.log(data); setVehiculos(data.results);});
		//
		} catch(e){
		console.log(e);
		}
	
		}

		useEffect(() => {getList() }, []);

    return(
		<>		{vehiculos.map((item, id) =>  <div className="m-4 ms-0" key={id}>
		<div className="card" style={{width: "15rem"}}>
	  <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (item.uid) + ".jpg"} className="card-img-top" alt="..."/>
	  <div className="card-body">
	  <h4 className="card-title">{item.name}</h4>
				<div className="d-flex justify-content-between">
				<Link className="btn btn-outline-primary" to={"/detail-vehicle/"+ (item.uid) } >Learn More!</Link>
				<Link className="btn btn-outline-warning"><i className="fa fa-heart"></i></Link>
				</div>
	  </div>
	  </div>
	  </div> )}
		</>

    );
}
