import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Header from './components/Header';
import Erro from './pages/Erro';
import Footer from './components/Footer';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/> 
            <Route path="/contato" element={<Contato/>}/>

            <Route path="*" element={<Erro/>}/>

        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;