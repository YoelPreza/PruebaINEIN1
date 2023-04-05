import { useEffect, useState } from "react"
import { Card } from "./Card"



const Cards = () => {
    const [characters, setCharacters] = useState([])

    const api = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        setCharacters(data.results)
    }
    // console.log(characters);
    useEffect(() => {
        api();
    }, [])



    return (
        <div>
            {characters.map((character, index) =>
                <Card
                    key={index}
                    name={character.name}
                    species={character.species}
                    gender={character.gender}
                    image={character.image}
                    status={character.status}

                    id={character.id}
                />

            )}





        </div>
    )
}

export default Cards