import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";

import { CardPersonajes } from "../component/cardPersonajes.jsx";
import { CardVehiculos } from "../component/cardVehiculos.jsx";
import { CardPlanetas } from "../component/cardPlanetas.jsx"
import { number } from "prop-types";

export const Home = () => {

	return(
		<div className="mx-4">
  
		<div className="d-flex">
			<div className="col col-lg-2">

<div className="list-group bg-dark rounded-0 text-start my-4" id="myTab" role="tablist">

<p className="text-secondary ms-3 fs-6 fw-semibold ">BROWSE</p>

<button className="nav-link active bg-transparent text-white border-0 text-start fw-bold fs-5 select" id="people-tab" data-bs-toggle="tab" data-bs-target="#people-tab-pane" type="button" role="tab" aria-controls="people-tab-pane" aria-selected="false">CHARACTERS</button>

<button className="nav-link bg-transparent text-white mt-2 border-0 text-start fw-bold fs-5 select" id="planet-tab" data-bs-toggle="tab" data-bs-target="#planet-tab-pane" type="button" role="tab" aria-controls="planet-tab-pane" aria-selected="false">PLANETS</button>

<button className="nav-link bg-transparent text-white mt-2 border-0 text-start fw-bold fs-5 select" id="vehicle-tab" data-bs-toggle="tab" data-bs-target="#vehicle-tab-pane" type="button" role="tab" aria-controls="vehicle-tab-pane" aria-selected="false">VEHICLES</button>

<div id="carouselExample"  className="carousel slide mt-3">
  <div className="carousel-inner">
    
    <div class="carousel-item active">
      <img src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2020/05/star-wars-the-complete-saga-will-be-on-disney-monday-credit-disney.jpg" className="d-block w-100"  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0265/2769/4934/products/Revenge-of-the-Sith-20th-Century-Fox-2005.-One-Sheet-2722-X-4022-DS-Style-B_1200x1200.jpg?v=1608527021" className="d-block w-100"  alt="..."/>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
		</div>

</div>

<div className="col">
<div className="tab-content" id="myTabContent">

    

  <div className="tab-pane fade show active" id="people-tab-pane" role="tabpanel" aria-labelledby="people-tab">
    
  
  <div className="m-0 ps-0 row d-flex justify-content-start"> 
  <CardPersonajes/>
  </div>
  
  </div>
  <div className="tab-pane fade" id="planet-tab-pane" role="tabpanel" aria-labelledby="planet-tab">
 
  <div className="m-0 ps-0 row d-flex justify-content-start"> 
  <CardPlanetas/>
  </div>
  </div>

  <div className="tab-pane fade" id="vehicle-tab-pane" role="tabpanel" aria-labelledby="vehicle-tab">

  <div className="m-0 ps-0 row d-flex justify-content-start"> 
  <CardVehiculos/>
  </div>

  </div>

  </div>

  </div>
 
</div>
	

	</div>

	);

};

	

