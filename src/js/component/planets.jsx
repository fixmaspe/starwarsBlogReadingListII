import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlanetsSection = (props) => {
  const { store, actions } = useContext(Context);

  let heartfav = "";

  return (
    <>
      {store.planets.map((i) => {
        if (i.favorite == false) {
          heartfav = "far fa-heart";
        } else {
          heartfav = "fas fa-heart";
        }
        return (
          <div
            key={i.index}
            className="card col-3 border border-warning bg-dark p-0 mt-3 mb-3 ms-1 me-1"
          >
            <h5 className="card-title bg-warning text-dark p-2 m-0">
              {i.name}
            </h5>
            <img
              src={
                "https://starwars-visualguide.com/assets/img/planets/" +
                i.uid +
                ".jpg" 
              }
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body ">
              <div className="d-flex justify-content-between">
                <Link to={"/SinglePlanetView/" + i.uid}>
                  <button className="btn btn-warning">
                    Leer Mas
                  </button>
                </Link>
                <button
                  className="btn btn-warning"
                  onClick={() =>
                    actions.addToFavorites(
                      i.uid,
                      "/SinglePlanetView/" + i.uid,
                      i.name,
                      i.type,
                      i.index
                    )
                  }
                >
                  <i className={heartfav} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PlanetsSection;
