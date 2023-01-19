import React, {useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const DetailsVehicle = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

    //Obtengo lista del usuario
	useEffect(() => {
		actions.getDetailVehicle(params.id);
		window.scrollTo(0, 0)
	}, []);

    return (
		<div className="container w-75">
		<div className="jumbotron">
		<div className="rounded border border-danger">
		<div className="row g-0">
		<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (params.id) + ".jpg"} className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-8 text-white">
  <h1 className="display-2 mx-3">{store.detalleVehicle.name}</h1>
  <p className="lead mx-3">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  </div>
  </div>
  </div>
  <div className="mt-3 border-bottom border-danger">	
					<div className="row row-cols-6 text-danger text-center">
						<div className="col"><h5 className="text-secondary">Name</h5> <p className="fw-normal">{store.detalleVehicle.name}</p></div>
						<div className="col"><h5 className="text-secondary">Model</h5> <p className="fw-normal">{store.detalleVehicle.model}</p></div>
						<div className="col"><h5 className="text-secondary">Manufacturer</h5> <p className="fw-normal">{store.detalleVehicle.manufacturer}</p></div>
						<div className="col"><h5 className="text-secondary">Length</h5><p className="fw-normal">{store.detalleVehicle.length}</p></div>
						<div className="col"><h5 className="text-secondary">Passengers</h5> <p className="fw-normal">{store.detalleVehicle.passengers}</p></div>
						<div className="col"><h5 className="text-secondary">Vehicle Class</h5> <p className="fw-normal">{store.detalleVehicle.vehicle_class}</p></div>
					</div>
			</div>
</div>
</div>
	);
	
	
};


DetailsVehicle.propTypes = {
	match: PropTypes.object
};