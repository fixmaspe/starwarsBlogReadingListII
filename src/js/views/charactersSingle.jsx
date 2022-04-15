import React, { useEffect, useState, useContext}from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";

const SingleCharacterView = props => {

    const { store, actions } = useContext(Context);
	const params = useParams();

    useEffect(() => {
        actions.getPerson(params.theid)
    }, []);

    return (
    <>
    <div className="container-fluid bg-dark bgimage">
		<div className="container text-light pt-5 pb-5">
            <div className="pt-3 pb-3 d-flex justify-content-around">
                <div className="col-3">
                    <img src={"https://starwars-visualguide.com/assets/img/characters/"+ params.theid + ".jpg"} className="card-img-top border border-warning" alt="..." ></img>
                </div>
                <div className="col-9">
                    <div className="fs-3 ms-5 fw-bold mb-3 text-warning border-bottom border-warning border-5">{store.person.name}</div>
                    <div className="fs-5 ms-5 text-light">Nacimiento: {store.person.birth_year} </div>
                    <div className="fs-5 ms-5 text-light">Altura: {store.person.height}cm</div>
                    <div className="fs-5 ms-5 text-light">Peso: {store.person.mass}kg</div>
                    <div className="fs-5 ms-5 text-light">Genero: {store.person.gender}</div>
                    <div className="fs-5 ms-5 text-light">Hair Color: {store.person.hair_color}</div>
                    <div className="fs-5 ms-5 text-light">Color de Ojos: {store.person.eye_color}</div>
                    <div className="fs-5 ms-5 text-light">Color de Piel: {store.person.skin_color} </div>
                    <div className="fs-5 ms-5 text-light">Origen: </div>
                    <Link to="/">
                        <button className="fs-5 ms-5 mt-5 text-dark btn btn-warning"> Home</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default SingleCharacterView