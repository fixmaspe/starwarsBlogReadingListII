import React, { useEffect, useState, useContext}from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";


const CharSection = props => {

    const { store, actions } = useContext(Context);

    let heartfav = "";
   
    return (
        <>
            {
                store.people.map((i) => {
                    if(i.favorite == false){
                        heartfav = "far fa-heart" ;
                    }else {
                        heartfav = "fas fa-heart" ;
                    }
                    return(
                        
                        <div key={i.index} className="card col-2 border border-warning bg-dark p-0 mt-3 mb-3 ms-1 me-1">
                            <h5 className="card-title bg-warning text-dark p-2 m-0">{i.name}</h5>
                            <img src={"https://starwars-visualguide.com/assets/img/characters/"+ i.uid + ".jpg"} className="card-img-top g-0 m-0 p-0" alt="..." ></img>
                            <div className="card-body ">
                                <div className="d-flex justify-content-between">
                                    <Link to={"/SingleCharacterView/" + i.uid} >
                                        <button className="btn btn-warning" >Leer Mas</button>
                                    </Link>
                                    <button className="btn btn-warning" onClick={() => actions.addToFavorites(i.uid, "/SingleCharacterView/" + i.uid, i.name,i.type,i.index)}>
                                        <i className={heartfav}/>
                                    </button>
                                </div>
                            </div>
                        </div> 
                    );
                })
            }
        </>
    )



}

export default CharSection