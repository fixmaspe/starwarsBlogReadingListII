import React, { useEffect, useState, useContext}from "react";
import { Link } from "react-router-dom";
import FavoritesInside from "./favorites.jsx";
import { Context } from "../store/appContext";

export const Navbar = () => {
	
	const { store, actions } = useContext(Context);
	
	return (
		<div className="container-fluid bg-dark bg-dark pt-3 pb-3 border-bottom border-dark">
		<nav className="container navbar navbar-dark ">
			<Link to="/">
				<img src="https://logosmarcas.net/wp-content/uploads/2020/11/Star-Wars-Emblema.png" className="logo"/>
			</Link>
			<div className="ml-auto">
				
					<div className="dropdown">
						<button className="btn dropdown-toggle d-flex" type="button" id="favoritesBtn" data-bs-toggle="dropdown" aria-expanded="false">
							<div className="col-11">Favoritos</div><div className="col-1">{store.favorites.length}</div> 
						</button>
						<ul className="dropdown-menu col-12" aria-labelledby="favoritesBtn">
							<FavoritesInside />
						</ul>
					</div>
				
			</div>
		</nav>
		</div>
	);
};
