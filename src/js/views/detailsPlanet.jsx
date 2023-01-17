import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsPlanet = () => {
	const params = useParams();
	
	let [detallePlanet, setDetallePlanet] = useState({});

    //Obtengo lista del usuario
	function getList(){
		try {
			fetch('https://swapi.tech/api/planets/' + params.id, {
				method: "GET",
				headers: {
			"Content-Type": "application/json"
		  }
		}).then((response) => response.json()).then((data)=>{console.log(data); setDetallePlanet(data.result.properties);});
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
						<img src={"https://starwars-visualguide.com/assets/img/planets/" + (params.id) + ".jpg"} className="img-fluid rounded-start" alt="..." style={{width: "18rem"}}/>
					</div>
					<div className="col-md-8">
  <h1 className="display-4">{detallePlanet?.name}</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  </div>
  </div>
  <hr className="my-4 text-danger text-center" style={{height: "5px"}}/>	
					<div className="row row-cols-6 text-danger text-center">
						<div className="col"><h5>Name</h5> <p className="fw-normal">{detallePlanet?.name}</p></div>
						<div className="col"><h5>Tarrain</h5> <p className="fw-normal">{detallePlanet?.terrain}</p></div>
						<div className="col"><h5>Climate</h5> <p className="fw-normal">{detallePlanet?.climate}</p></div>
						<div className="col"><h5>Diameter</h5><p className="fw-normal">{detallePlanet?.diameter}</p></div>
						<div className="col"><h5>Rotation Period</h5> <p className="fw-normal">{detallePlanet?.rotation_period}</p></div>
						<div className="col"><h5>Orbital Period</h5> <p className="fw-normal">{detallePlanet?.orbital_period}</p></div>
					</div>
			
</div>
</div>
	);

};

