import './../Sobre/style.css'


function Sobre() {
    return (
        <>

            <div className='content-wrapper'>
                <h1 className='content-text'>CONHEÇA A DIETA COM SAÚDE</h1>
                <img src={require('./../../assets/Fruits.jpg')} alt="Imagem de frutas vermelhas" />

            </div>


            <div className='body_sobre'>
                <article className='post_sobre'>

                    <h1>Somos uma empresa especializada em nutrição, fornecendo dicas, apoios e dietas para nossos clientes, para que todos possam ter uma
                        qualidade de vida saúdavel.
                    </h1>

                </article>

            </div>
        </>

    )
}

export default Sobre;