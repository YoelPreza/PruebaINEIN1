import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.scss"

export const Card = (props) => {
    return (

        <div className="contenedor">
            <Link to={`/detail/${props.id}`}>
                <img className="imagenes" src={props.image} alt="" />
            </Link>
                <div className='letras'>
                <h2 className="nombre"> {props.name}</h2>
                <h2>Specie: {props.species}</h2>
                <h2>Gender: {props.gender}</h2>
                <h2>Status: {props.status}</h2>

            </div>

        </div>




    )
}
