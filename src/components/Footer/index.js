import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'


function Footer(){
    
return(
<>
<footer>
 <div className='boxs'> 
 <h2>Links</h2>
 <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/sobre">Sobre</Link></li>
    <li><Link to="/contato">Contato</Link></li>
 </ul>
 </div>

 <div className='boxs'>
 <h2>Redes Sociais</h2>
 <ul>
    <li><a href="https://github.com/DavidTufi120" target="_blank" rel="noopener noreferrer" ><i className="fa fa-github" aria-hidden="true"></i> GitHub</a></li>
    <li><a href="https://www.linkedin.com/in/davi-toledo-mattos-pcd-629994222/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</a></li>
    <li><a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511976319390" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp" aria-hidden="true"></i>WhatsApp</a></li>
 </ul>
 </div>
 <p>© 2022 Davi Toledo Mattos - Todos os direitos reservados.</p>
 

</footer>



</>
)

}

export default Footer;