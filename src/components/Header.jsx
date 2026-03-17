import { NavLink } from "react-router"
import { Star } from 'lucide-react';

function linkClass ({ isActive }) {
    return isActive ? "border-b-2 border-red-800" : "text-white-700 hover:text-red-600"
}

function Header() {
    return (
        <header className="bg-gray-600 text-gray-200 
        py-6 text-center text-sm">
            <h1>MyApp <Star className="inline size-5 fill-red-900 stroke-red-900 stroke-1" /> </h1>
            <div className="flex gap-20 justify-center">
                <NavLink to="/" className={linkClass}>Início</NavLink>
                <NavLink to="/sobre" className={linkClass}>Sobre</NavLink>
                <NavLink to="/contato" className={linkClass}>Contato</NavLink>
            </div>

        </header>
    )
}

export default Header