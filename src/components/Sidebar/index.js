import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoN from '../../assets/images/nish.png'
import lnkl from '../../assets/images/lnkl.png';
import lcc from '../../assets/images/lcc.png';
import githubc from '../../assets/images/githubc.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLaptopCode, faHome, faUser} from '@fortawesome/free-solid-svg-icons'

const Sidebar = ()=>(

<div className='nav-bar'>
    <Link className='logo' to='/'>
     <img src = {LogoS} alt ="logo" />
     <img className='nish-logo' src = {LogoN} alt ="logoN" />
    </Link>    
    <nav>
    <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="contact-link" to="/projects">
        <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
    </NavLink>
    </nav>

<ul>
    <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nishant-singh-rai/">
        <img src={lnkl} color="#F06529" alt="developer" />
            
        </a>
    </li>
    <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/NishantR19">
        <img src={githubc} color="#F06529" alt="developer" />
            
        </a>
    </li>
    <li>
        <a target="_blank" rel="noreferrer" href="https://leetcode.com/nishantsinghrai474/">
        <img src={lcc} color="#F06529" alt="developer" />
        </a>
    </li>
</ul>

</div>

)
export default Sidebar