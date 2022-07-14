
import { Link } from 'react-router-dom';
import './../Header/style.css';



function Header() {
    return (
        <>
            <header className='header'>

                <div className='menulateral'>
                    <input type="checkbox" id="chec"></input>
                    <label htmlFor="chec" id="menu">

                       
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/sobre'>Sobre</a></li>
                            <li><a href='/contato'>Contato</a></li>
                        </ul>
                    </nav>
                  
                </div>
                <Link to="/"><h3>DIETA COM SAÚDE</h3></Link>
               
              
                <div className='menu'>
                    <Link to='/'>Home</Link>
                    <Link to='/sobre'>Sobre</Link>
                    <Link to='/contato'>Contato</Link>
                </div>
            </header>

        </>
    )
}

export default Header;