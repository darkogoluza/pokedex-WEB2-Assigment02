import {useEffect, useState} from "react";
import PokedexCard from "../components/PokedexCard";
import {NavLink} from "react-router-dom";

function Home() {
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)

    const pokemonsPerPage = 20

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${pokemonsPerPage}`)
            .then(response => {
                if (response.ok) return response.json()
                throw new Error("Network response was not ok")
            })
            .then(pokemonsData => {
                setPokemons(pokemonsData.results)
            })
            .catch(err => console.log(err))
    }, [offset])


    const next = () => {

        let newOffset = offset + pokemonsPerPage
        if(newOffset > 1279)
            newOffset = 1279

        setOffset(newOffset)
    }

    const previous = () => {
        let newOffset = offset - pokemonsPerPage
        if(newOffset < 0)
            newOffset = 0

        setOffset(newOffset)
    }


    return (
        <div className="max-w-screen-2xl mx-auto py-16 px-16 space-y-8">
            <h1 className="text-4xl text-center">Pokemon app</h1>

            <ul className="flex flex-wrap gap-8 justify-center">
                { pokemons.map((pokemon, index) => (
                    <li
                        key={index}
                        className="cursor-pointer"
                    >
                        <PokedexCard name={pokemon.name} url={pokemon.url}/>
                    </li>
                ))}
            </ul>
            <p className="text-right text-slate-500">{pokemons.length} pokemons displayed</p>

            <p className="text-center">page {Math.ceil(offset/pokemonsPerPage)} of {Math.ceil(1279/pokemonsPerPage)}</p>
            <div className="flex justify-center space-x-8">
                <button onClick={previous}
                        className="px-4 py-2 rounded-lg bg-slate-300 hover:bg-slate-400 transition-all ease-in-out">previous
                </button>
                <button onClick={next}
                        className="px-4 py-2 rounded-lg bg-slate-300 hover:bg-slate-400 transition-all ease-in-out">next
                </button>
            </div>

        </div>
    );
}

export default Home