import {Routes, Route, NavLink} from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import SinglePokemon from "./pages/SinglePokemon";


function App() {
    return (
        <div>
            <header className="w-full bg-slate-900 py-6 text-slate-100">
                <div className="flex justify-end max-w-screen-2xl mx-auto  px-16">
                    <nav className="space-x-6">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </nav>
                </div>
            </header>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/pokemon/:id" element={<SinglePokemon />} />
            </Routes>
        </div>
    )
}

export default App;
