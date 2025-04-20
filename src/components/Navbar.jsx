import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header flex items-center justify-between p-4 bg-transparent">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
      >
        <p className="blue-gradient_text">MS</p>
      </NavLink>

      <nav className="flex gap-4">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-2 bg-white text-black rounded-lg shadow-md transition ${
              isActive ? "font-bold" : "font-medium"
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `px-4 py-2 bg-white text-black rounded-lg shadow-md transition ${
              isActive ? "font-bold" : "font-medium"
            }`
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
