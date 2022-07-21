import { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';


function Contato() {

 const navigate = useNavigate();    

    const [user, setUser] = useState({
        name: '',
        email: '',
        mensagem: '',
    })

   

    const [status,setStatus] = useState({
     type: '',
     mensagem: '',

    })

    const addUser = async e => {
   
     e.preventDefault();

     if(!validate()) return;

     const saveDataForm = true;

     if(saveDataForm){
        setStatus({
            type:'success',
            mensagem:'Formulário enviado com sucesso, iremos entrar em contato!'
    
         })
         setTimeout(() => {
            navigate({pathname: '/'})
         }, 5000);
        setUser({
            name: '',
            email: '',
            mensagem: '',
        })
     }else{
        setStatus({
        type: 'error',
        mensagem: 'Erro: Erro ao cadastrar o usuário'
    })
     }
 }


 function validate(){
    if(!user.name) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo Nome! '}); 
    if(!user.email) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo E-mail! '}); 
    if(!user.mensagem) return setStatus({ type: 'error', mensagem: 'Erro: Necessário preencher o campo Mensagem! '});
    
    return true;
 }

 const valueInput = e => setUser({...user,[e.target.name]: e.target.value})

     return (
           
        <body>
           
            <div id="area">
                <form id="formulario" autocomplete="off" onSubmit={addUser} >
              
                    <fieldset>
                        <legend>Preencha o formulário para entrar em contato</legend>
                        {status.type ==='success'? <p style={{color: 'green'}}>{status.mensagem}</p> : ""}
                        {status.type ==='error'? <p style={{color: '#ff0000'}}>{status.mensagem}</p> : ""}
                        <label>Nome*:</label><input name="name" className="campo" type="text" value={user.name} placeholder="Digite o seu nome" onChange={valueInput}/><br />
                        <label>Email*:</label><input className="campo" name="email" type="email" value={user.email} placeholder="Digite o seu e-mail" onChange={valueInput}   /><br />
                        <label>Mensagem*:</label><br /><textarea className="msg" name="mensagem" cols="52" rows="8" onChange={valueInput} value={user.mensagem} 
                        placeholder="Digite a sua mensagem para entrarmos em contato"></textarea><br />
                        <button class="btn_submit" type="submit" value="Enviar">Enviar</button>
                    </fieldset>
                    <div>
                        
            </div>
        </form>

            </div >

        </body >

    )
}

export default Contato;