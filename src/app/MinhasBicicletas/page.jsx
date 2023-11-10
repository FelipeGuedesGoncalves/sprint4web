import Link from 'next/link'
import './MinhasBicicletas.scss'

export default function MinhasBicicletas() {


    return (
        <main>
            <h1 className='h1bikes'>Minhas Bicicletas</h1>

            <section className='bike'>
                <div className='fotoPerfilBike'>
                    <img className='imagemBike' src={"sem_imagem.png"} alt="foto da bike" />
                    <h3 className='nomeBike'>Bicicleta 1</h3>
                </div>
                <section className='infos'>
                    <article className='info'>
                        <h3 className='secao secNumSerie'>Numero de Série</h3>
                        <p className='textoBike txtNumserie'>-</p>
                    </article>
                    <article className='info'>
                        <h3 className='secao secAcessorios'>Acessórios</h3>
                        <p className='textoBike txtAcessorios'>-</p>
                    </article>
                    <article className='info'>
                        <h3 className='secao secModelo'>Modelo</h3>
                        <p className='textoBike txtModelo'>-</p>
                    </article>
                    <Link className='mais' href="/Bike">Ver Mais</Link>
                </section>
            </section>
            <button className='addBike'>+</button>
        </main>

    )

}
