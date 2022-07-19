import { Link } from 'react-router-dom'
import './style.css'

function Contato(){
    return(
        <main>
        <div>
            <h1>Pagina Contato</h1>
            <span>Contato da empresa (11)32132131</span>

            <Link to="/">Home</Link>
            <Link to='/sobre'>Sobre</Link> 
        </div>
        </main>
    )
}

export default Contato;