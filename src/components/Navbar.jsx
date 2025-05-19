import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src="/logo.webp" alt='logo' className='w-12 h-12 object-contain rounded-xl' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <a
          href="https://drive.google.com/file/d/1uAsnKh4eCIuQ5zOrGedltqPtKQokSCVL/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-blue-600"
        >
          Resume
        </a>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
