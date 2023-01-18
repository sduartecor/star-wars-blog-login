import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import { CardPersonajes } from "../component/cardPersonajes.jsx";
import { CardVehiculos } from "../component/cardVehiculos.jsx";
import { CardPlanetas } from "../component/cardPlanetas.jsx"
import { number } from "prop-types";

export const Home = () => {

	return(
		<div className="container-fluid">
	<div className="container w-75">

			
		<h1 className="text-danger mb-4">Characters</h1>
		<div className="m-0 ps-0 d-flex scrollable">
		<CardPersonajes/>
		</div>
		<h1 className="text-danger my-4">Planets</h1>
		<div className="m-0 ps-0 d-flex scrollable">
		<CardPlanetas/>
		</div>
		<h1 className="text-danger my-4">Vehicles</h1>
		<div className="m-0 ps-0 d-flex scrollable">
		<CardVehiculos/>
		</div>
		
	</div>
	</div>

	);

};

	

