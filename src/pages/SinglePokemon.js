import {useParams} from 'react-router-dom';
import {useState, useEffect} from "react";
import colorsByType from "../colorsByType";


function SinglePokemon() {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => {
                if (response.ok) return response.json()
                throw new Error("Network response was not ok")
            })
            .then(pokemonData => {
                setPokemon(pokemonData)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            {pokemon && (
                <div className="max-w-screen-2xl mx-auto py-16 px-16 space-y-8">
                    <h1 className="text-center text-6xl mb-24 font-bold capitalize">{pokemon.name}</h1>
                    <div className="flex justify-between">

                        <div
                            className="space-y-6 p-6 pt-4 rounded-xl text-slate-900 bg-slate-300 shadow-lg drop-shadow-lg border border-r-0 border-t-1 border-l-0  border-b-1 border-b-slate-400/50 border-t-slate-100/50">
                            <h2 className="text-2xl font-bold">Stats</h2>
                            <ul className="space-y-4 ">
                                {pokemon.stats.map((stat, index) => (<li
                                    className="flex flex-col"
                                    key={index}>
                                    <p className="capitalize">{stat.stat.name}: <span
                                        className="text-sm text-slate-600">{stat.base_stat}%</span></p>
                                    <div className="w-[200px] bg-slate-400 rounded-full h-2.5 ">
                                        <div
                                            className={"h-2.5 rounded-full" + " " + colorsByType[pokemon.types[0].type.name]}
                                            style={{width: (stat.base_stat * 2) + "px"}}></div>
                                    </div>
                                </li>))}
                            </ul>
                        </div>

                        <div
                            className="space-y-6">
                            <h2 className="text-2xl font-bold">Abilities</h2>
                            <ul className="space-y-4 ">
                                {pokemon.abilities.map((ability, index) => (<li
                                    className="flex flex-col"
                                    key={index}>
                                    <p className="capitalize">{ability.ability.name}</p>
                                </li>))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold">Overall info</h2>
                            <table>
                                <tr>
                                    <td>
                                        <p className="pr-2 py-2 text-slate-700"> Id:</p>
                                    </td>
                                    <td>
                                        <p className=" px-4 py-1 rounded-lg w-fit text-sm bg-red-200 text-red-600 ">#{pokemon.id}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="pr-2 py-2 text-slate-700">Weight:</p>
                                    </td>
                                    <td>
                                        <p className="px-4 py-1 rounded-lg w-fit text-sm bg-green-200 text-green-600 ">{pokemon.weight / 10}kg</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="pr-2 py-2 text-slate-700">Height:</p>
                                    </td>
                                    <td>
                                        <p className="px-4 py-1 rounded-lg w-fit text-sm bg-yellow-100 text-yellow-600 ">{pokemon.height * 10}cm</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="pr-2 py-2 text-slate-700">Type:</p>
                                    </td>
                                    <td>
                                        <p className="px-4 py-1 rounded-lg w-fit text-sm bg-indigo-200 text-indigo-600 capitalize">{pokemon.types[0].type.name}</p>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold">Image</h2>
                            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name}/>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SinglePokemon