import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to="/" className="w-auto h-10 px-5 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">JS Portfolio</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-zinc-800'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-zinc-800'}>
                    Projects
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar