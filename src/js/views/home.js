import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CharSection from "../component/chars.jsx";
import VehicleSection from "../component/vehicles.jsx";
import PlanetsSection from "../component/planets.jsx";


export const Home = () => (
	<div className="container-fluid bg-dark bgimage">

		<div className="container text-light pt-3 pb-3">
			<div className="fs-3 fw-bold mb-5 text-warning  text-center">Personajes</div>
			<div className="row pt-3 pb-3 d-flex justify-content-center">
				<CharSection />
			</div>
			<div className="fs-3 fw-bold mb-5 text-warning  text-center">Naves</div>
			<div className="row pt-3 pb-3 d-flex justify-content-center">
				<VehicleSection />
			</div>
			<div className="fs-3 fw-bold mb-5 text-warning  text-center">Planetas</div>
			<div className="row pt-3 pb-3 d-flex justify-content-center">
				<PlanetsSection />
			</div>

		</div>

	</div>
);
