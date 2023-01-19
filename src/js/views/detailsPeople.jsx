import React, {useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const DetailsPeople = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);
	
    //Obtengo lista del usuario
	useEffect(() => {
		actions.getDetailPeople(params.id);
	}, []);

    return (
		<div className="container">
		<div className="jumbotron">
		<div className="row g-0">
		<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/characters/" + (params.id) + ".jpg"} className="img-fluid rounded-start" alt="..." style={{width: "18rem"}}/>
					</div>
					<div className="col-md-8">
  <h1 className="display-4">{store.detallePeople.name}</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  </div>
  </div>
  <hr className="my-4 text-danger text-center" style={{height: "5px"}}/>	
					<div className="row row-cols-6 text-danger text-center">
						<div className="col"><h5>Name</h5> <p className="fw-normal">{store.detallePeople.name}</p></div>
						<div className="col"><h5>Birth Year</h5> <p className="fw-normal">{store.detallePeople.birth_year}</p></div>
						<div className="col"><h5>Gender</h5> <p className="fw-normal">{store.detallePeople.gender}</p></div>
						<div className="col"><h5>Height</h5><p className="fw-normal">{store.detallePeople.height}</p></div>
						<div className="col"><h5>Skin Color</h5> <p className="fw-normal">{store.detallePeople.skin_color}</p></div>
						<div className="col"><h5>Eye color</h5> <p className="fw-normal">{store.detallePeople.eye_color}</p></div>
					</div>
			
</div>
</div>
	);

};


DetailsPeople.propTypes = {
	match: PropTypes.object
};
