import React, { useEffect, useState, useContext}from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";


const FavoritesInside = props => {
    
    const { store, actions } = useContext(Context);
    
    return store.favorites.map((i) => (
        <>
            <li key={i.index}>
                <div className="card">
                    <div className="d-flex justify-content-start">
                        <div className="col-9">
                            <Link to={i.url}>
                                <button className="btn" onClick={() => actions.getPerson(i.uid)}>{i.name}</button>
                            </Link>
                        </div>
                        <div className="col-1">
                            <button className="btn btn-danger" onClick={() => actions.removeFromFavorites(i)}>X</button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    ));
}

export default FavoritesInside