
import React, { useEffect, useState} from 'react';
import './../../style.css';
import { Link } from 'react-router-dom'


function Home(){
const [nutri, setNutri] = useState([]);

useEffect(()=> {
function loadApi(){
  let url = 'https://www.sujeitoprogramador.com/rn-api/?api=posts'
  fetch(url)
  .then((r) => r.json())
  .then((json)=> {
    setNutri(json);
  })
}
loadApi()
},[]);

function teste(){
  alert('oi')
}

return(

 
  
  <div className="container">
    
     {nutri.map((item)=>{
      return (
        <article key={item.id} className="post">
          <b className="titulo">{item.titulo}</b>
        <img src={item.capa} alt={item.titulo} className="capa"/>
        <p className="subtitulo">
          {item.subtitulo}
        </p>
        <h2>Categoria: {item.categoria}</h2>
        <a className="botao">Acessar</a>
        </article>
      )
    })}
   
  </div>
  


)
}

export default Home;