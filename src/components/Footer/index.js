import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'


function Footer(){
return(
<>
<footer>
 <h2>Home</h2>
 <ul>
    <li><Link to="/" className='footer-link'>Home</Link></li>
    <li><Link to="/sobre" className='footer-link'>Sobre</Link></li>
    <li><Link to="/contato" className='footer-link'>Contato</Link></li>
 </ul>
</footer>

</>
)

}

export default Footer;