import React, {useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const DetailsPlanet = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

    //Obtengo lista del usuario
	useEffect(() => {
		actions.getDetailPlanet(params.id);
		window.scrollTo(0, 0)
	}, []);


    return (
		<div className="container">
		<div className="jumbotron">
		<div className="row g-0">
		<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/planets/" + (params.id) + ".jpg"} className="img-fluid rounded-start" alt="..." style={{width: "18rem"}}/>
					</div>
					<div className="col-md-8 text-white">
  <h1 className="display-4">{store.detallePlanet.name}</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  </div>
  </div>
  <hr className="my-4 text-danger text-center" style={{height: "5px"}}/>	
					<div className="row row-cols-6 text-danger text-center">
						<div className="col"><h5>Name</h5> <p className="fw-normal">{store.detallePlanet.name}</p></div>
						<div className="col"><h5>Tarrain</h5> <p className="fw-normal">{store.detallePlanet.terrain}</p></div>
						<div className="col"><h5>Climate</h5> <p className="fw-normal">{store.detallePlanet.climate}</p></div>
						<div className="col"><h5>Diameter</h5><p className="fw-normal">{store.detallePlanet.diameter}</p></div>
						<div className="col"><h5>Rotation Period</h5> <p className="fw-normal">{store.detallePlanet.rotation_period}</p></div>
						<div className="col"><h5>Orbital Period</h5> <p className="fw-normal">{store.detallePlanet.orbital_period}</p></div>
					</div>
			
</div>
</div>
	);

};


DetailsPlanet.propTypes = {
	match: PropTypes.object
};