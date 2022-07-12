
import { Link } from 'react-router-dom';
import './../Header/style.css'

function Header(){
    return(
        <header>
            <h2>DIETA COM SAÚDE</h2>

            <div className='menu'>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contato'>Contato</Link>
            </div>
        </header>
    )
}

export default Header;