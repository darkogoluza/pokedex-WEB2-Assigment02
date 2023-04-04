import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import colorsByType from "../colorsByType";

function PokedexCard({name, url}) {

    const [pokemon, setPokemon] = useState(null)


    useEffect(() => {
        fetch(url)
            .then(response => {
                if (response.ok) return response.json()
                throw new Error("Network response was not ok")
            })
            .then(pokemonData => {

                setPokemon(pokemonData)
            })
            .catch(err => console.log(err))
    }, [url])

    return (
        <>
            {pokemon &&
                <NavLink to={`/pokemon/${pokemon.id}`}>
                    <div
                        className={"w-64 h-24 py-4 px-8 rounded-xl flex justify-between transition-all ease-in-out hover:scale-[1.1] hover:shadow-xl hover:drop-shadow-xl" + " " + colorsByType[pokemon.types[0].type.name]}>
                        <div>
                            <p className="text-slate-200">#{pokemon.id}</p>
                            <p className="text-lg font-bold text-white">{name}</p>
                        </div>
                        <img width="50" src={pokemon.sprites.other.dream_world.front_default} alt={name}/>
                    </div>
                </NavLink>
               }
        </>
    );
}

export default PokedexCard;