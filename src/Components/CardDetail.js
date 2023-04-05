import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CardDetail.scss"

const CardDetail = () => {

  let { detailId } = useParams();

  const [character, setCharacter] = useState("")

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        setCharacter(char);
      });
    return setCharacter({});
  }, [detailId]);

  const originName = character.origin?.name
  const locationnName = character.location?.name

  return (
    <div className="cardDetail">

      <img className="imagenes" src={character.image} alt="" />
      <div className="textoDetail">
        <h1>Name:   {character.name}</h1>
        <h2>Status: {character.status}</h2>
        <h2>Specie: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        <h2>Origin: {originName}</h2>
        <h2>location: {locationnName}</h2>
<Link to={'/'}><button className="botonDetail">Volver</button></Link>


      </div>
    </div>
  )
}

export default CardDetail