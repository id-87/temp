import './Navbar.css'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
<div className="header">
<nav>
<NavLink to="/"> <img src={logo} className="logoimg" alt="logo" /></NavLink>

<div className='menu'>
<NavLink to="/"  className="menu-item" >Home</NavLink>
<NavLink   to="/project" className="menu-item" id="project" >Run Simulation </NavLink>
<NavLink  to="/login" className="menu-item">Contact Us </NavLink>
</div>

</nav>

</div>
  )
}

export default Navbar