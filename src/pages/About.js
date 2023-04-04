function About() {
    return (
        <div className="max-w-screen-2xl mx-auto py-16 px-16 space-y-8">
            <div className="prose prose-slate mx-auto">
                <h1>About</h1>
                <p>Welcome to Pokedex assignment 2 for WEB2.</p>

                <p>Project is created using "<a href="https://create-react-app.dev/">Create React App</a>" toolchain.
                    Pokemon information is retrieved from <a href="https://pokeapi.co/">PokeAPI</a>.</p>

                <p>First 20 pokemons are fetched from the api and display in the home page. User can pagination through pages.</p>

                <p>Clicking on a pokemon card user is shown more information about the pokemon such as pokemon image, stats, abilities and basic information like name, id, weight...</p>

                <p>Routing through different pages is achieved with a help of <a href="https://reactrouter.com/en/main">React Router</a>.</p>

                <p>Website is hosted on github pages.</p>

                <p>Tak for læste 😊.</p>
            </div>
        </div>
    )
}

export default About