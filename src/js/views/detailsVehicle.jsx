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
	}, []);

    return (
		<div className="container">
		<div className="jumbotron">
		<div className="row g-0">
		<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (params.id) + ".jpg"} className="img-fluid rounded-start" alt="..." style={{width: "18rem"}}/>
					</div>
					<div className="col-md-8">
  <h1 className="display-4">{store.detalleVehicle?.name}</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  </div>
  </div>
  <hr className="my-4 text-danger text-center" style={{height: "5px"}}/>	
					<div className="row row-cols-6 text-danger text-center">
						<div className="col"><h5>Name</h5> <p className="fw-normal">{store.detalleVehicle?.name}</p></div>
						<div className="col"><h5>Model</h5> <p className="fw-normal">{store.detalleVehicle?.model}</p></div>
						<div className="col"><h5>Manufacturer</h5> <p className="fw-normal">{store.detalleVehicle?.manufacturer}</p></div>
						<div className="col"><h5>Length</h5><p className="fw-normal">{store.detalleVehicle?.length}</p></div>
						<div className="col"><h5>Passengers</h5> <p className="fw-normal">{store.detalleVehicle?.passengers}</p></div>
						<div className="col"><h5>Vehicle Class</h5> <p className="fw-normal">{store.detalleVehicle?.vehicle_class}</p></div>
					</div>
			
</div>
</div>
	);
	
	
};


DetailsVehicle.propTypes = {
	match: PropTypes.object
};