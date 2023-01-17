import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsVehicle = () => {
	const params = useParams();
	
	let [detalleVehicle, setDetalleVehicle] = useState({});

    //Obtengo lista del usuario
	function getList(){
		try {
			fetch('https://swapi.tech/api/vehicles/' + params.id, {
				method: "GET",
				headers: {
			"Content-Type": "application/json"
		  }
		}).then((response) => response.json()).then((data)=>{console.log(data); setDetalleVehicle(data.result.properties);});
		//
		} catch(e){
		console.log(e);
		}
    }
	
	useEffect(() => {
		getList()
	}, []);

    return (
		<div className="container">
		<div className="jumbotron">
		<div className="row g-0">
		<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (params.id) + ".jpg"} className="img-fluid rounded-start" alt="..." style={{width: "18rem"}}/>
					</div>
					<div className="col-md-8">
  <h1 className="display-4">{detalleVehicle?.name}</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  </div>
  </div>
  <hr className="my-4 text-danger text-center" style={{height: "5px"}}/>	
					<div className="row row-cols-6 text-danger text-center">
						<div className="col"><h5>Name</h5> <p className="fw-normal">{detalleVehicle?.name}</p></div>
						<div className="col"><h5>Model</h5> <p className="fw-normal">{detalleVehicle?.model}</p></div>
						<div className="col"><h5>Manufacturer</h5> <p className="fw-normal">{detalleVehicle?.manufacturer}</p></div>
						<div className="col"><h5>Length</h5><p className="fw-normal">{detalleVehicle?.length}</p></div>
						<div className="col"><h5>Passengers</h5> <p className="fw-normal">{detalleVehicle?.passengers}</p></div>
						<div className="col"><h5>Vehicle Class</h5> <p className="fw-normal">{detalleVehicle?.vehicle_class}</p></div>
					</div>
			
</div>
</div>
	);

};

