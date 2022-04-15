import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import SingleCharacterView from "./views/charactersSingle.jsx";
import SingleVehicleView from "./views/vehicleSingle.jsx";
import SinglePlanetView from "./views/planetSingle.jsx";


//create your first component
const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>

						<Route exact path="/SingleCharacterView/:theid">
							<SingleCharacterView />
						</Route>

						<Route exact path="/SingleVehicleView/:theid">
							<SingleVehicleView />
						</Route>

						<Route exact path="/SinglePlanetView/:theid">
							<SinglePlanetView />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
