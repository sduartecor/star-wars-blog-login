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
		<div className="container w-75">
		<div className="jumbotron">
		<div className="rounded border border-danger">
		<div className="row g-0">
		<div className="col-md-4  border-end border-danger">
						<img src={params.id == "1" ? "https://static.wikia.nocookie.net/theclonewiki/images/b/b4/Tatooine-TCW.png" : "https://starwars-visualguide.com/assets/img/planets/"+ (params.id) +".jpg"} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8 text-white">
  <h1 className="display-2 mx-3">{store.detallePlanet.name}</h1>
  <p className="lead mx-3">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  </div>
  </div>
  </div>
  <div className="mt-3 border-bottom border-danger">	
					<div className="row row-cols-6 text-danger text-center">
						<div className="col"><h5 className="text-secondary">Name</h5> <p className="fw-normal">{store.detallePlanet.name}</p></div>
						<div className="col"><h5 className="text-secondary">Tarrain</h5> <p className="fw-normal">{store.detallePlanet.terrain}</p></div>
						<div className="col"><h5 className="text-secondary">Climate</h5> <p className="fw-normal">{store.detallePlanet.climate}</p></div>
						<div className="col"><h5 className="text-secondary">Diameter</h5><p className="fw-normal">{store.detallePlanet.diameter}</p></div>
						<div className="col"><h5 className="text-secondary">Rotation Period</h5> <p className="fw-normal">{store.detallePlanet.rotation_period}</p></div>
						<div className="col"><h5 className="text-secondary">Orbital Period</h5> <p className="fw-normal">{store.detallePlanet.orbital_period}</p></div>
					</div>
					</div>
</div>
</div>
	);

};


DetailsPlanet.propTypes = {
	match: PropTypes.object
};